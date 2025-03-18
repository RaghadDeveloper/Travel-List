import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import State from "./Components/State";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleDeleteList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="container">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onDeleteList={handleDeleteList}
      />
      <State items={items} />
    </div>
  );
}
