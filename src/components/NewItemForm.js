import React from "react";

function NewItemForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    /*console.log(e)
    const itemData = {
      name: "",
      image: "",
      price: null
    }; 
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));
      */
  }
  return (
    <div className="new-item-form">
      <h2>Add to Closet</h2>
      <form>
        <input type="text" name="name" placeholder="New Item Name" />
        <input type="text" name="image" placeholder="Image URL" />
        <button type="submit" onSubmit={handleSubmit}>Add New Item</button>
      </form>
    </div>
  );
}


export default NewItemForm;