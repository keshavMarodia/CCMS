import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Main.css";
const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let court = location.state.court;
  const [caseType, setCaseType] = useState("");
  const [caseYear, setCaseYear] = useState("");
  const [caseNo, setCaseNo] = useState("");
  var max = new Date().getFullYear();
  var min = max - 24;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  console.log(years);
  const handleSubmit = (e) => {
    const data = { caseType, caseNo, caseYear };
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
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("OS")}
                    >
                      OS
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("LGOP")}
                    >
                      LGOP
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("LGCSR")}
                    >
                      LGCSR
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("LGC")}
                    >
                      LGC
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("WP")}
                    >
                      WP
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("WP(PLI)")}
                    >
                      WP(PLI)
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => setCaseType("PLI")}
                    >
                      PLI
                    </div>
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
