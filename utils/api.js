import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://dnesgurung-nc-news.onrender.com/api",
});

export const getAllArticles = (topic, articleId) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getSingleArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const getArticlesCommentsById = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (articleId, increment) => {
  return newsApi
    .patch(`/articles/${articleId}`, {
      inc_votes: increment,
    })
    .then((res) => {
      return res.data.votes;
    });
};

export const postComment = (articleId, newComment) => {
  return newsApi
    .post(`/articles/${articleId}/comments`, {
      username: "grumpy19",
      body: newComment,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComments = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
