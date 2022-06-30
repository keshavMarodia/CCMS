import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Input.css";
const Input = () => {
  const location = useLocation();
  const { court, caseType, caseNo, caseYear } = location.state;
  const [imp, setImp] = useState("");
  const [land, setLand] = useState("");
  const [filed, setFiled] = useState("");
  const [icourt, setiCourt] = useState("");
  const [judge, setJudge] = useState("");
  const [hall, setHall] = useState("");
  return (
    <div>
      <Navbar />
      <div className="input-parent">
        <form className="input-form">
          <div className="input-table">
            <table>
              <tr>
                <th colSpan={3}>Case Details</th>
                <th colSpan={1}>Filed By</th>
                <th colSpan={1}>Land Matter Case</th>
                <th colSpan={1}>Imp. Case</th>
                <th colSpan={1}>Court</th>
                <th colSpan={1}>Judge Designation</th>
                <th colSpan={1}>Court Hall</th>
              </tr>
              <tr>
                <td>
                  <div className="static">{caseType}</div>
                </td>
                <td>
                  <div className="static">{caseNo}</div>
                </td>
                <td>
                  <div className="static">{caseYear}</div>
                </td>
                <td>
                  <input
                    type="text"
                    value={filed}
                    className="form-control form-control-sm dropdown-toggle file"
                    placeholder="Filed By"
                    aria-label="Filed By"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu file-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setFiled("PVT. Party")}
                      >
                        PVT. Party
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setFiled("Collector")}
                      >
                        Collector
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setFiled("Joint Collector")}
                      >
                        Joint Collector
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setFiled("RDO")}
                      >
                        RDO
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setFiled("MRO")}
                      >
                        MRO
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <input
                    type="text"
                    value={land}
                    className="form-control form-control-sm dropdown-toggle land"
                    placeholder="Land Matter Case"
                    aria-label="Land Matter Case"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu land-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setLand("Yes")}
                      >
                        Yes
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setLand("No")}
                      >
                        No
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <input
                    type="text"
                    value={imp}
                    className="form-control form-control-sm dropdown-toggle imp"
                    placeholder="Imp. Case"
                    aria-label="Imp. Case"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu imp-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setImp("Yes")}
                      >
                        Yes
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setImp("No")}
                      >
                        No
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    value={icourt}
                    className="form-control form-control-sm dropdown-toggle court"
                    placeholder="Court"
                    aria-label="Court"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu court-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setiCourt("City-Civil-Court-HYD")}
                      >
                        City-Civil-Court-HYD
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setiCourt("City-Civil-Court-SECBAD")}
                      >
                        City-Civil-Court-SECBAD
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setiCourt("High-Court")}
                      >
                        High-Court
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setiCourt("WKAF-Tribunal-CCC-HYD")}
                      >
                        WKAF-Tribunal-CCC-HYD
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <input
                    type="text"
                    value={judge}
                    className="form-control form-control-sm dropdown-toggle judge"
                    placeholder="Judge Designation"
                    aria-label="Judge Designation"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu judge-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("Jr. Civil Judge")}
                      >
                        Jr. Civil Judge
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("Sr. Civil Judge")}
                      >
                        Sr. Civil Judge
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("Addl. Sr. Civil Judge")}
                      >
                        Addl. Sr. Civil Judge
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("Addl. Chief Judge")}
                      >
                        Addl. Chief Judge
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("Chief Judge")}
                      >
                        Chief Judge
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setJudge("NIL")}
                      >
                        NIL
                      </div>
                    </li>
                  </ul>
                </td>
                <td>
                  <input
                    type="text"
                    value={hall}
                    className="form-control form-control-sm dropdown-toggle hall"
                    placeholder="Court Hall"
                    aria-label="Court Hall"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    required
                  />
                  <ul className="dropdown-menu hall-scroll" role="menu">
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setHall("Yes")}
                      >
                        Yes
                      </div>
                    </li>
                    <li>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setHall("No")}
                      >
                        No
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
