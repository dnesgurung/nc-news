import { useState } from "react";
import { postComment } from "../../utils/api";


function AddComment({ articleId, setComments }) {
  
  const [newComment, setNewComment] = useState("");
   
  function handleChange(e) {
    const commentText = e.target.value;
    console.log(commentText)
    setNewComment(commentText);
    
  }
  function handleSubmit(event) {
    event.preventDefault();
   
    postComment(articleId, newComment)
    .then((response)=> {
      
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          id="comment-area"
          type="text"
          onChange={handleChange}
          placeholder="Add a comment..."
        />
        <div>
          <button id="post-comment-btn">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddComment;
