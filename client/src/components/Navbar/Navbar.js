import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [court, setCourt] = useState("");
  const handleClick = (e) => {
    navigate("/");
  };
  return (
    <>
      <div className="nav-parent">
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
        <div className="tab-container">
          {/* <nav> */}
          <ul className="nav-options">
            <li className="tab-items">
              <Link
                to={{
                  pathname: "/home",
                }}
                className="tab-link"
              >
                Home
              </Link>
            </li>
            <li className="tab-items">
              <Link
                to={{
                  pathname: "/home",
                }}
                className="tab-link"
              >
                Courts
              </Link>
              <ul className="subnav">
                <li
                  id="city"
                  className="sub-items"
                  onClick={(e) => {
                    setCourt("City-Civil-Court");
                  }}
                >
                  <Link
                    to={"/main"}
                    state={{ court: court }}
                    className="sub-link"
                  >
                    City-Civil-Court
                  </Link>
                </li>
                <li
                  id="lg"
                  className="sub-items"
                  onClick={(e) => {
                    setCourt("LG-Court");
                  }}
                >
                  <Link
                    to={"/main"}
                    state={{ court: court }}
                    className="sub-link"
                  >
                    LG-Court
                  </Link>
                </li>
                <li
                  id="high"
                  className="sub-items"
                  onClick={(e) => {
                    setCourt("High-Court");
                  }}
                >
                  <Link
                    to={"/main"}
                    state={{ court: court }}
                    className="sub-link"
                  >
                    High-Court
                  </Link>
                </li>
                <li
                  id="city"
                  className="sub-items"
                  onClick={(e) => {
                    setCourt("Supreme-Court");
                  }}
                >
                  <Link
                    to={"/main"}
                    state={{ court: court }}
                    className="sub-link"
                  >
                    Supreme-Court
                  </Link>
                </li>
              </ul>
            </li>
            <li className="tab-items">
              <Link
                to={{
                  pathname: "/home",
                }}
                className="tab-link"
              >
                Reports
              </Link>
            </li>
          </ul>
          {/* </nav> */}
        </div>
        <div className="logout-contianer">
          <button className="logout" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
