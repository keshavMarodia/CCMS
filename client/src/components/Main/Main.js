import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
const Main = () => {
  const location = useLocation();
  const [casetype, setCaseType] = useState("");
  const [caseYear, setCaseYear] = useState("");
  const [caseNo, setCaseNo] = useState("");
  console.log(location.state.court);
  return (
    <div>
      <Navbar />
      <div className="main-parent">
        <div className="court-heading">City-Civil-Court</div>
        <div className="main-body">
          <div className="enter-heading">Enter Case Details</div>
          <div className="main-input">
            <form className="main-form">
              {/* Case Type */}
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Case Type
                </span>
                <input
                  type="text"
                  value={casetype}
                  className="form-control dropdown-toggle"
                  placeholder="Case Type"
                  aria-label="Case Type"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  required
                />
                <ul
                  className="dropdown-menu scrollable-menu custom-scroll"
                  role="menu"
                >
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("Action")}
                    >
                      Action
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("Another Action")}
                    >
                      Another action
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                </ul>
              </div>
              {/* Case Number */}
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Case No.
                </span>
                <input
                  type="text"
                  value={caseNo}
                  onChange={(e) => setCaseNo(e.target.value)}
                  className="form-control"
                  placeholder="Case No."
                  aria-label="Case No."
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              {/* Case year */}
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Case Year
                </span>
                <input
                  type="text"
                  value={caseYear}
                  className="form-control dropdown-toggle"
                  placeholder="Case Year"
                  aria-label="Case Year"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  required
                />
                <ul
                  className="dropdown-menu scrollable-menu custom-scroll"
                  role="menu"
                >
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseYear("Action")}
                    >
                      Action
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseYear("Another Action")}
                    >
                      Another action
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                </ul>
              </div>
              <div className="button-container">
                <button className="submit-container">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
