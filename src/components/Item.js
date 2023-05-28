import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
const {url, name, id} = props.item
return (
  <div className="card">
    <img src={url} alt={name} />
    <h4>
      <Link to={`/Closet/${id}`}>{name}</Link>
    </h4>
    <button type="delete" onClick={()=>props.handleDeleteItem(props.item)}>Donate</button>
  </div>
  );
}
export default Item;