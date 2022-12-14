
import React, {useState, useEffect} from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";

function App() {
  const [items, setItems] = useState([]);

 
  function handleAddItem(item) {
    setItems([...items, item])
  }

 function handleRemoveItem(id){
    const updatedItemList = items.filter((item)=> item.id !== id);
    setItems(updatedItemList);
  }

  function handleDeleteItem(item) {
    fetch(`http://localhost:3000/items/${item.id}`, {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.status === 200) {
        handleRemoveItem(item.id)
      }
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/items`)
    .then((r)=>r.json())
    .then((data) => setItems(data))
  }, [])


  return (
    <>
    <Header />
    <NavBar />
    <Switch>
      <Route path="/Form">
        <NewItemForm handleAddItem={handleAddItem}/>
        <ItemList handleDeleteItem={handleDeleteItem} items={items} />
      </Route>
      <Route path="/Closet">
        <ItemList handleDeleteItem={handleDeleteItem} items={items} />
      </Route>
      <Route path="/Home">
        <NewItemForm handleAddItem={handleAddItem}/>
        <ItemList handleDeleteItem={handleDeleteItem} items={items} />
      </Route>
      <Route path="*">
        <ItemList handleDeleteItem={handleDeleteItem} items={items} />
      </Route>
    </Switch>
    </>

  )
}

export default App;