import React, { useEffect, useState } from "react";
import { getSingleArticle } from "../../utils/api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import ArticleVote from "./ArticleVote";

function SingleArticle() {
  const [sglArticle, setSglArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState([]);

  const { articleId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(articleId)
      .then((articleIdFromApi) => {
        setSglArticle(articleIdFromApi);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [articleId]);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p> Uh Oh! Something went wrong there...</p>;

  return (
    <div id="single-article">
      <img src={sglArticle.article_img_url} />
      <h2>{sglArticle.title}</h2>
      <p>By : {sglArticle.author}</p>
      <p>Created at: {new Date(sglArticle.created_at).toLocaleDateString()}</p>
      <p>{sglArticle.body}</p>
      <ArticleVote votes={sglArticle.votes} articleId={sglArticle.article_id} />
      <div></div>
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default SingleArticle;
