import React, {useState , useEffect} from "react";
import { useParams } from "react-router";

function ItemDetailPage() {
const params = useParams();

const [itemInfo, setItemInfo] = useState([])

useEffect(() => {
fetch(`http://localhost:3000/items/${params.id}`)
.then((r)=>r.json())
.then((data) => setItemInfo(data))
}, [])
return(
<div className="card">
    <h3>Selected Item</h3>
    <img src={itemInfo.image} alt={itemInfo.name} />
    <h4>{itemInfo.name}</h4>
    <h5>{`$${itemInfo.price}`}</h5>
    <h5>{`Purachased on: ${itemInfo.date}`}</h5>
</div>
)
}
export default ItemDetailPage;