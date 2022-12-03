import {React, useState} from "react";

function Item({name , category}) {
  const [isInList, setList] = useState(true);

  function handleDelete() {
    //setList((isInList) => !isInList);
  }
if (isInList){
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}
}

export default Item;