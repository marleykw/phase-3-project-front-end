import React from "react";
import Item from "./Item";


function ItemList({items, handleDeleteItem}) {
  const itemsToRender = items.map((item)=> <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} />)
  return (
    <div className="itemList">
      <ul className="Items">{itemsToRender}</ul>
    </div>
  );
}

export default ItemList;
