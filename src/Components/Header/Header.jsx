import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter  h-menu">
          <a href="">Residents</a>
          <a href="">our core values</a>
          <a href="">Get started</a>
          <a href="">About us</a>
          <button className="button">
            <a href="">Contact us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
