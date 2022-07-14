import { useState } from "react";
import "./Govt.css";

const Govt = ({data , updateCase}) => {
  const [govt, setGovt] = useState(data?.otherDept?.length > 0 ? data.otherDept[0].deptInterest : "");
  const [govtNo, setGovtNo] = useState(data?.otherDept[0]?.deptInterest === "No" ? true :false);
  const [govtYes, setGovtYes] = useState(data?.otherDept[0]?.deptInterest === "Yes" ? true :false);
  const [govtYesDept, setGovtYesDept] = useState(data?.otherDept?.length > 0 ? data.otherDept[0].dept : "");
  const [govtYesCat, setGovtYesCat] = useState(data?.otherDept?.length > 0 ? data.otherDept[0].category : "");
  const [dept, setDept] = useState([
    "GHMC",
    "ENDOWMENT",
    "R&B",
    "POLICE",
    "MEDICAL&HEALTH",
    "CENTRAL GOVT",
    "HOUSING BOARD",
    "CIVIL SUPPLIES",
    "WAKF BOARD",
    "EDUCATION",
    "CUSTODIAN OF EVACUEE PROP.",
    "HMDA",
    "OTHERS",
  ]);
  const [cat, setCat] = useState([
    "GVM",
    "SURPLUS LAND",
    "TEMPLE",
    "PWD",
    "HOSPITAL",
    "G SCHOOL",
    "EP",
    "OTHERS",
  ]);
  
  function updateOther(){
    const othervalues = { 
      "deptInterest" : govt,
      "dept" : govtYesDept,
      "category" : govtYesCat
    };
    updateCase({"otherDept" : [othervalues]});
  }

  return (
    <div className="govt-parent">
      <div className="intro-heading">Other Govt Department</div>
      <div className="govt-form">
        <div className="govt-drop">
          <div className="input-group mb-3 wstmt-input">
            <span
              className="input-group-text accent govt-accent"
              id="basic-addon1"
            >
              Other Govt. Dept. Interested In This Land
            </span>
            <input
              type="text"
              value={govt}
              className="form-control dropdown-toggle"
              aria-describedby="basic-addon1"
              data-bs-toggle="dropdown"
              required
            />
            <ul className="dropdown-menu govt-scroll" role="menu">
              <li>
                <div
                  className="dropdown-item"
                  onClick={(e) => (
                    setGovt("No"), setGovtNo(true), setGovtYes(false)
                  )}
                >
                  No
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={(e) => (
                    setGovt("Yes"), setGovtNo(false), setGovtYes(true)
                  )}
                >
                  Yes
                </div>
              </li>
            </ul>
          </div>
          <div className="specific-button-container">
            <div className="specific-button" onClick={updateOther()}>Save</div>
          </div>
        </div>
        <div className="govt-result">
          {govtNo && <div></div>}
          {govtYes && (
            <div className="govt-yes-parent">
              <div className="input-group mb-3 wstmt-input">
                <span
                  className="input-group-text accent main-accent wstmt-accent"
                  id="basic-addon1"
                >
                  Department
                </span>
                <input
                  type="text"
                  value={govtYesDept}
                  className="form-control dropdown-toggle"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  required
                />
                <ul className="dropdown-menu govt-yes-scroll" role="menu">
                  {dept.map(function (value, index) {
                    return (
                      <li>
                        <div
                          id={index}
                          className="dropdown-item"
                          onClick={(e) => setGovtYesDept(value)}
                        >
                          {value}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="input-group mb-3 wstmt-input">
                <span
                  className="input-group-text accent main-accent wstmt-accent"
                  id="basic-addon1"
                >
                  Category Of Land
                </span>
                <input
                  type="text"
                  value={govtYesCat}
                  className="form-control dropdown-toggle"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  required
                />
                <ul className="dropdown-menu custom-scroll" role="menu">
                  {cat.map(function (value, index) {
                    return (
                      <li>
                        <div
                          id={index}
                          className="dropdown-item"
                          onClick={(e) => setGovtYesCat(value)}
                        >
                          {value}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Govt;
