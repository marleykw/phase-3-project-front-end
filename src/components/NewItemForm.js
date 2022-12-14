
import React, {useState} from "react";

function NewItemForm({handleAddItem}) {
  const initialFormData = {
    name: "",
    image: ""
  }
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData
    }

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    })
        .then((r) => r.json())
        .then((item) => handleAddItem(item))

        setFormData(initialFormData)
  };

  return (
    <div className="new-item-form">
      <h2>Add to Closet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="New Item Name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <button type="submit">Add New Item</button>
      </form>
    </div>
  );
}


export default NewItemForm;
