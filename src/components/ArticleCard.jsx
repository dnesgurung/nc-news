import { Link } from "react-router-dom";



function ArticleCard({ img, title, article_id, date, commentCount, votes}) {
  return (
    <div>
      <img src={img} alt={`a photo of ${title}`} />
      <h3>{title} </h3>
      <h5>Posted on: {new Date(date).toLocaleDateString()}</h5>
      <h5>Total comments: {commentCount}</h5>
      <h5>Total Votes: {votes}</h5>
      <Link to={`/articles/${article_id}`}>
        Read article
      </Link>
    </div>
  );
}

export default ArticleCard;
