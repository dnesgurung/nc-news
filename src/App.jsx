import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";


function App() {

  return (
    <main className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<ArticlesList />}/>
        <Route path="/topics/:topic" element={<ArticlesList />}/>
        <Route path="/articles/:articleId" element={<SingleArticle />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </main>
  );
}

export default App;
