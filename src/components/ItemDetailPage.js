import React, {useState , useEffect} from "react";
import { useParams } from "react-router";
import { format } from 'date-fns'
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import ItemUpdateForm from "./ItemUpdateForm";

function ItemDetailPage() {
const params = useParams();

const [itemInfo, setItemInfo] = useState([])

useEffect(() => {
fetch(`http://localhost:9292/closet/${params.id}`)
.then((r)=>r.json())
.then((data) => setItemInfo(data))
}, [])


function handleUpdateItem(itemId) {
    console.log(`its running`)
    fetch(`http://localhost:9292/closet/${itemId}`)
    .then((r)=>r.json())
    .then((data) => setItemInfo(data))
  }  

return(
<div className="card">
    <h3>Selected Item</h3>
    <img src={itemInfo.url} alt={itemInfo.name} />
    <h2>{itemInfo.name}</h2>
    <h5>${`${itemInfo.price}`}</h5>
    <h5>{`Purachased on: ${itemInfo.purchase_date}`}</h5>
    <h5>{`Last worn on: ${itemInfo.last_worn}`}</h5>
<Comments itemInfo={itemInfo} handleUpdateItem={handleUpdateItem} />
<CommentForm article_id={itemInfo.id} />
<ItemUpdateForm handleUpdateItem={handleUpdateItem}/>
</div>
)
}
export default ItemDetailPage;

