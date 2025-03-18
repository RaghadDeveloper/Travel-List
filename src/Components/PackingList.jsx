import { useState } from "react";
import ListItem from "./ListItem";

export default function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onDeleteList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by inprt order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onDeleteList()}>clear list</button>
      </div>
    </div>
  );
}
