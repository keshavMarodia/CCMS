import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [courts, setCourts] = useState([
    "CITY-CIVIL-COURT",
    "LG-COURT",
    "HIGH-COURT",
    "SUPREME-COURT",
  ]);
  const [report, setReport] = useState([
    "DISPOSED IN FAVOUR OF GOVT.",
    "DISPOSED AGAINST GOVT.",
    "DISPOSED WITH CERTAIN DIRECTIONS",
    "DISMISSED",
    "IMPORTANT CASE",
    "LAND CASE",
    "RELATED TO WAKF BOARD",
  ]);
  const navigate = useNavigate();
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
          <div className="company">NIC Hyderabad</div>
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
                {courts.map(function (value, index) {
                  return (
                    <li id={index} className="sub-items">
                      <Link
                        to={"/main"}
                        state={{ court: value }}
                        className="sub-link"
                      >
                        {value}
                      </Link>
                    </li>
                  );
                })}
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
              <ul className="report-nav">
                {report.map(function (value, index) {
                  return (
                    <li id={index} className="sub-items">
                      <Link
                        to={"/report"}
                        state={{ report: value }}
                        className="sub-link"
                      >
                        {value}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          {/* </nav> */}
        </div>
        <div className="intro-parent">
          <div className="officer">{localStorage.getItem("username")}</div>
          <div className="logout-contianer">
            <button className="logout" onClick={handleClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
