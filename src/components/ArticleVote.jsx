import { useState } from "react";
import { patchArticleVotes } from "../../utils/api";
import "./articleVote.css";

function ArticleVote({ votes, articleId }) {
  const [voteCount, setVoteCount] = useState(votes);
  const [isError, setIsError] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  function handleIncrementalArticleVote() {
    if (!hasVoted) {
      setHasVoted(true);
      patchArticleVotes(votes).catch(() => {
        setVoteCount(voteCount + 1);
        setIsError(true);
        setHasVoted(false);
      });
    }
  }

  function handleDecrementalArticleVote() {
    if (!hasVoted) {
      setHasVoted(true);
      patchArticleVotes(votes).catch(() => {
        setVoteCount(voteCount - 1);
        setIsError(true);
        setHasVoted(false);
      });
    }
  }

  return (
    <div className="vote-container">
      <p className="article-vote">Votes: {hasVoted ? voteCount : votes} </p>
      <div className="vote">
        {hasVoted ? (
          <p className="vote-feedback">Thanks for voting!</p>
        ) : (
          <div className="vote-btns">
            <button onClick={handleIncrementalArticleVote} className="vote-up">
              👍🏻
            </button>

            <button
              onClick={handleDecrementalArticleVote}
              className="vote-down"
            >
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
