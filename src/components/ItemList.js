import {React, useState, useEffect} from "react";
//import {TASKS, CATEGORIES} from "../data";
import Item from "./Item";


function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((r)=>r.json())
    .then((data) => setItems(data))
  }, [])

  return (
    <div className="itemList">
      <ul className="Items">
        {items.map((item) => ( 
          <Item key={item.id} name={item.name} image={item.image} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;