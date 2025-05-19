import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getAllArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Uh Oh! Somethings wrong.</p>;

  return (
    <div className="article-list">
      <h2>All Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              img={article.article_img_url}
              title={article.title}
              article_id={article.article_id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
