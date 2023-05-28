import React, {useState} from "react";

function Comments({itemInfo, handleUpdateItem}) {
const commentData = itemInfo.comments
function handleDelete(id, itemId) {
    console.log(`comment id ${id} and item id ${itemId}` )
    fetch(`http://localhost:9292/comments/${id}`, {
      method: "DELETE",
    })
    .then((r)=> {
      if(r.status === 200) {
        handleUpdateItem(itemId)
      }
    });
}


    return ( 
    <>
    <h3>Comments</h3>
        {commentData && commentData.map((comment) => (
            <div key={comment.id}>
            <h5>{comment.comment}</h5>
            <h6>{comment.created_at}</h6>
            <button onClick={()=>handleDelete(comment.id, itemInfo.id)} id={comment.id}>X</button>
            </div>
        ))}
    </>
    )
}

/* <h3>Comments</h3>
        {commentData && commentData.map((comment) => (
            <div key={comment.id}>
            <h5>{comment.comment}</h5>
            <h6>{comment.created_at}</h6>
            <button onClick={()=>handleDelete(comment.id, itemInfo.id)} id={comment.id}>X</button>
            </div>
        ))}*/

export default Comments;