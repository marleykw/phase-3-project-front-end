import React, {useState} from "react";

function CommentForm({article_id}) {
    const id = article_id
    const initialFormData = {
        comment: "",
        created_at: "",
        updated_at: "",
        outfit_id: ""
      }
      const [formData, setFormData] = useState(initialFormData)

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
    }
        const handleSubmit = (e) => {
        const newComment = {
            ...formData
        }
            fetch(`http://localhost:9292/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  article_id: e.target.id,
                  comment: newComment.comment
                })
              })   
    }

    return(
        <form id={id} onSubmit={handleSubmit}>
            <input type="text" name="comment" placeholder="Add Comments" onChange={handleChange}/>
            <button type="submit" id={id}>Post Comment</button>
        </form>
    )
}

export default CommentForm;
















