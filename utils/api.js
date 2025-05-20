import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://dnesgurung-nc-news.onrender.com/api",
});

export const getAllArticles = () => {
  return newsApi.get("/articles/").then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (articleId)=> {
    return newsApi.get(`/articles/${articleId}`).then((res)=> {
        return res.data.article;
    })
}

export const getArticlesCommentsById = (articleId)=> {
  return newsApi.get(`/articles/${articleId}/comments`).then((res)=> {
    return res.data.comments;
  })
}