import { useEffect} from "react";
import { getArticlesCommentsById } from "../../utils/api";
import { useParams } from "react-router-dom";
import "./comments.css"

function Comments({comments, setComments}){

    const {articleId} = useParams();

    useEffect(()=>{
        getArticlesCommentsById(articleId).then((commentsFromApi)=>{
            setComments(commentsFromApi);
        })
    }, [articleId]);

    return(
        <section className="comments-container">
            <h5>Comments</h5>
            {comments.map((comment)=> {
                return (
                    <div id="comment-box" key={comment.comment_id}>
                        <li className="comment-list">
                            <h6>{comment.author}</h6>
                            <p className="comment-body">{comment.body}</p>
                            <h6>Date posted: {new Date(comment.created_at).toLocaleDateString()}</h6>
                        </li>
                    </div>
                )
            })}
        </section>
    )
}
export default Comments;