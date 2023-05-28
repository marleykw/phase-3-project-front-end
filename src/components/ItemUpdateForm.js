
import React, {useState} from "react";
import { useParams } from "react-router";


function ItemUpdateForm({handleUpdateItem}) {
  const initialFormData = {last_worn: ""}
  const params = useParams();
  //const [formData, setFormData] = useState(initialFormData)
  const [formData, setFormData] = useState([])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedItem = {
      ...formData
    }
    console.log(updatedItem)
    fetch(`http://localhost:9292/closet/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
    })
        .then((r) => r.json())
        .then((item) => handleUpdateItem(item.id))
        setFormData(initialFormData)
  };

  return (
    <div className="item-update-form">
      <h3>Last Worn</h3>
      <form onSubmit={handleSubmit}>
        <input type="date" name="last_worn" placeholder="Last Worn Date" value={formData.last_worn} onChange={handleChange}/>
        <button type="submit">Update Last Worn Date</button>
      </form>
    </div>
  );
}


export default ItemUpdateForm;
