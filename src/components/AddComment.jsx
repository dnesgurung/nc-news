import { useState } from "react";
import { postComment } from "../../utils/api";

function AddComment({articleId, setComments}) {

    const[newComment, setNewComment] = useState("");

    function handleChange(){

        postComment(articleId)
        

    }

  return (
    <form>
      <input type="text" id = "comment" placeholder="Add a comment"/>
      <button onClick={handleChange}>Post</button>
    </form>
  );
}

export default AddComment;
