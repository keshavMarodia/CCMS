import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="intro">
          <div className="nav-img">
            <img
              src="https://i.postimg.cc/V6hVNvGF/logo.png"
              alt="logo"
              className="nav_logo"
            ></img>
          </div>
          <div className="officer">loremipsumlorem</div>
        </div>
        <div className="container">
          <nav>
            <ul className="nav_options">
              <li className="items">
                <a href="#">Home</a>
              </li>
              <li className="Court">
                <a href="#">Courts</a>
                <ul className="subnav">
                  <li>
                    <a href="#">City-Civil-Court</a>
                  </li>
                  <li>
                    <a href="#">LG-Court</a>
                  </li>
                  <li>
                    <a href="#">High-Court</a>
                  </li>
                </ul>
              </li>
              <li className="items">
                <a href="#">Reports</a>
              </li>
            </ul>
          </nav>
        </div>
        <a className="logout" href="#">
          Logout
        </a>
      </header>
    </>
  );
};

export default Navbar;
