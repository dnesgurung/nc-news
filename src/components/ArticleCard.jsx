import { Link } from "react-router-dom";

function ArticleCard({ img, title, article_id }) {
  return (
    <div>
      <img src={img} alt={`a photo of ${title}`} />
      <h2>{title} </h2>
      <Link to={`/articles/${article_id}`}>
        Read article
      </Link>
    </div>
  );
}

export default ArticleCard;
