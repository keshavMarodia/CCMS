import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let court = location.state.court;
  const [caseTypeArray, setCaseTypeArray] = useState([
    "OS",
    "LGOP",
    "LGCSR",
    "LGC",
    "WP",
    "WP(PLI)",
    "PLI",
  ]);
  const [caseType, setCaseType] = useState("");
  const [caseYear, setCaseYear] = useState("");
  const [caseNo, setCaseNo] = useState("");
  var max = new Date().getFullYear();
  var min = max - 24;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  const handleSubmit = (e) => {
    const data = { court, caseType, caseNo, caseYear };
    navigate("/input", {
      state: data,
    });
  };
  return (
    <div>
      <Navbar />
      <div className="main-parent">
        <div className="court-heading">{court}</div>
        <div className="main-body">
          <div className="enter-heading">Enter Case Details</div>
          <div className="main-input">
            <form className="main-form" onSubmit={handleSubmit}>
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
                  value={caseType}
                  className="form-control dropdown-toggle"
                  placeholder="Case Type"
                  aria-label="Case Type"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  required
                />
                <ul
                  className="dropdown-menu scrollable-menu custom-scroll"
                  role="menu"
                >
                  {caseTypeArray.map(function (value, index) {
                    return (
                      <li>
                        <div
                          className="dropdown-item"
                          onClick={(e) => setCaseType(value)}
                        >
                          {value}
                        </div>
                      </li>
                    );
                  })}
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
                  required
                />
                <ul
                  className="dropdown-menu scrollable-menu custom-scroll"
                  role="menu"
                >
                  {years.map(function (value) {
                    return (
                      <li>
                        <div
                          className="dropdown-item"
                          onClick={(e) => setCaseYear(value)}
                        >
                          {value}
                        </div>
                      </li>
                    );
                  })}
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
