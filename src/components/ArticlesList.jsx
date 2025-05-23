import React, { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import "./articlesList.css";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
 
 const [searchParams, setSearchParams] = useSearchParams();

 const sortBy = searchParams.get("sort_by") || "created_at";
 const order = searchParams.get("order") || "desc";

 const {topic} = useParams();


  function handleSortByChange(event){
   event.preventDefault();
   const newSortBy = event.target.value;
   setSearchParams({sort_by: newSortBy, order})
  }
   function handleOrderChange(event){
     event.preventDefault();
     const newOrder = event.target.value;
     setSearchParams({sortBy, order: newOrder})
   }

  useEffect(() => {
    getAllArticles({topic, sort_by: sortBy, order})
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [topic, sortBy, order]);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Uh Oh! Somethings wrong.</p>;

  return (
    <div className="sort-by">
      <form className="sort-by-form">
    
    <select value={sortBy} onChange={handleSortByChange}>
      <option value="created_at">Date</option>
      <option value="comment_count">Comments</option>
      <option value="votes">Votes</option>
      
      
    </select>
      </form>
      <form>
        <select value={order} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>

    <div className="article-list">
      <h2>All Articles {topic? `about ${topic}`: ""}</h2>
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard
            key={article.article_id}
            img={article.article_img_url}
            title={article.title}
            article_id={article.article_id}
            date={article.created_at}
            commentCount={article.comment_count}
            votes={article.votes}
            />
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default ArticlesList;
