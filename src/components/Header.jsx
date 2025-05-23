import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <div className="navbar-container">
        <nav className="navbar">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/articles">
            Articles
          </Link>
          <Link className="navlink" to="/topics/coding">Coding</Link>
          <Link className="navlink" to="/topics/football">Football</Link>
          <Link className="navlink" to="/topics/cooking">Cooking</Link>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
