import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <h1>NC News</h1>
      <nav className="navbar">
        <Link className="navlink" to="/">
          Home
        </Link>
        <Link className="navlink" to="/articles">
          Articles
        </Link>
      </nav>
    </header>
  );
}

export default Header;
