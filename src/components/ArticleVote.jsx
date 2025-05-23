import { useState } from "react";
import { getSingleArticle, patchArticleVotes } from "../../utils/api";
import "./articleVote.css";



function ArticleVote({ votes, articleId }) {
  const [voteCount, setVoteCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const currentVoteCount = votes

  function handleVotes(voteOnArticle) {
    if (!hasVoted) {
      const newVoteCount = currentVoteCount + voteOnArticle;
      setVoteCount(newVoteCount);
      setHasVoted(true);

      patchArticleVotes(articleId, voteOnArticle)
      
      .catch(() => {
        setVoteCount(voteCount);
        setIsError(true);
        setHasVoted(false);
      });
    }
  }

  return (
    <div className="vote-container">
      <p className="article-vote">Votes: {hasVoted? voteCount: currentVoteCount} </p>
      <div className="vote">
        {hasVoted ? (
          <p className="vote-feedback">Thanks for voting!</p>
        ) : (
          <div className="vote-btns">
            <button onClick={() => handleVotes(1)} className="vote-up">
              👍🏻
            </button>

            <button onClick={() => handleVotes(-1)} className="vote-down">
              👎🏻
            </button>
          </div>
        )}
        {isError ? (
          <p className="error-message">
            Uh oh! Failed to vote. Please try again later
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default ArticleVote;
