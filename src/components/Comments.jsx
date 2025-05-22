import { useContext, useEffect} from "react";
import { getArticlesCommentsById } from "../../utils/api";
import { useParams } from "react-router-dom";
import "./comments-css.css"
import { AccountContext } from "../context/Account";
import DeleteComment from "./DeleteComment";

function Comments({comments, setComments}){

    const {articleId} = useParams();
    const {loggedInUser} = useContext(AccountContext)
  
    useEffect(()=>{
        getArticlesCommentsById(articleId).then((commentsFromApi)=>{
            setComments(commentsFromApi);
        })
    }, [articleId]);

    return(
        <section className="comments-container">
            <h4 className="comment-title">Comments</h4>
            {comments.map((comment)=> {
                return (
                    <div id="comment-box" key={comment.comment_id}>
                        <li className="comment-list">
                            <h6>{comment.author}</h6>
                            <p className="comment-body">{comment.body}</p>
                            <h6>Date posted: {new Date(comment.created_at).toLocaleDateString()}</h6>
                            {loggedInUser.username === comment.author ? ( <DeleteComment comment_id={comment.comment_id} setComments={setComments}/>): null}
                        </li>
                    </div>
                )
            })}
        </section>
    )
}
export default Comments;