import {React, useState} from "react";

function Item({name, image, id}) {
return (
  <div className="card">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <button type="delete" >Donate</button>
  </div>
);
}
export default Item;