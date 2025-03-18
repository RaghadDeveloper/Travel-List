import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault(); 
    if (!name) return;
    const item = {
      id: Date.now(),
      name: name,
      quantity: quantity,
      packed: false,
    };
    onAddItem(item);
    console.log(item);
    setName("");
    setQuantity(1);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>What do you need for your 😍 trip</p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
