import React from "react";
function Item(props) {
const {image, name, id} = props.item
return (
  <div className="card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <button type="delete" onClick={()=>props.handleDeleteItem(props.item)}>Donate</button>
  </div>
  );
}
export default Item;