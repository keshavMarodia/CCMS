import React from "react";
import { Link, useNavigate } from "react-router-dom";

const subnav = ()=>{
<ul className="subnav">
                <li
                  id="city"
                  className="sub-items"
                >
                  <Link
                    to={"/main"}
                    state={{ court: "City-Civil-Court" }}
                    className="sub-link"
                  >
                    City-Civil-Court
                  </Link>
                </li>
                <li
                  id="lg"
                  className="sub-items"
                >
                  <Link
                    to={"/main"}
                    state={{ court: "LG-Court" }}
                    className="sub-link"
                  >
                    LG-Court
                  </Link>
                </li>
                <li
                  id="high"
                  className="sub-items"
                >
                  <Link
                    to={"/main"}
                    state={{ court: "High-Court"}}
                    className="sub-link"
                  >
                    High-Court
                  </Link>
                </li>
                <li
                  id="city"
                  className="sub-items"
                >
                  <Link
                    to={"/main"}
                    state={{ court: "Supreme-Court" }}
                    className="sub-link"
                  >
                    Supreme-Court
                  </Link>
                </li>
</ul>
}

export default subnav;