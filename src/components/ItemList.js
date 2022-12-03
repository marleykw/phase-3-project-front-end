import React from "react";
//import {TASKS, CATEGORIES} from "../data";
import Item from "./Item";


//console.log(TASKS)
//console.log(CATEGORIES)

function ItemList({task}) {
  //console.log({isInList})
  //const tasksToDisplay = task.filter(({task}) =>{
   // if (selectedCategory === "All") return true;

    //return item.category === selectedCategory;
    //return true;
  //});
  return (
    <div className="tasks">
      <ul className="Items">
        {task.map((task) => (
          <Item key={task.text} name={task.text} category={task.category} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;