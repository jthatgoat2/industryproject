import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="logo">
        <p className="logo__points"> &#128176; Points</p>
        <Link to="/">
          <img
            className="logo__image"
            src="src/assets/Your paragraph text_20240628_012533_0000.png"
            alt="logo"
          />
        </Link>
        <p className="logo__streak">34 Days&#128293;</p>
      </section>

      <div className="hero">
        <h1 className="hero__welcome">Welcome, Jordan</h1>
      </div>
    </>
  );
}

export default Header;
