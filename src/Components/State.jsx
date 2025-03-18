export default function State({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="state">
      <p>
        {!numItems
          ? "Start adding some items to your packing list 🚀"
          : percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed 
        ${packedItems} ( ${percentage}%)`}
      </p>
    </footer>
  );
}
