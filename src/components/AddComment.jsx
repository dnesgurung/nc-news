import { useState } from "react";
import { postComment } from "../../utils/api";
import "./addComment.css";



function AddComment({ articleId, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e) {
    const commentText = e.target.value;
    setNewComment(commentText);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSuccessful(true);

    postComment(articleId, newComment)
      .then((addedComments) => {
        setComments((prevComments) => {
          return [...prevComments, addedComments];
        });
        setNewComment("");
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsSuccessful(false);
      });
  }

  if (isSuccessful) return <p>Posting...</p>;
  if (error) return <p>Uh Oh! Something went wrong there... Please try again.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-container">
        <textarea
          className="comment-area"
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add a comment..."
        />
        <div>
          <button className="post-comment-btn">Post</button>
        </div>
      </div>
    </form>
  );
}

export default AddComment;
