import { deleteComments } from "../../utils/api";
import { useState } from "react";
import "./deleteComment.css";

function DeleteComment({ comment_id, setComments }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    setIsError(false);

    deleteComments(comment_id)
      .then(() => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsDeleted(false);
      });
  };

  if (isDeleted) return <p>Deleting ...</p>;

  if (isError)
    return <p> Uh Oh! Something went wrong there. Please try again.</p>;

  return (
    <div className="delete-container">
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteComment;
