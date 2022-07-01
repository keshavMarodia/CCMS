import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Relief from "../Relief/Relief";
import Wstmt from "../Wstmt/Wstmt";
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
  const [specific, setSpecific] = useState("");
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
                <th colSpan={1}>Land Case</th>
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
                <td className="file">
                  <input
                    type="text"
                    value={filed}
                    className="form-control form-control-sm dropdown-toggle"
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
                <td className="land">
                  <input
                    type="text"
                    value={land}
                    className="form-control form-control-sm dropdown-toggle"
                    placeholder="Land Case"
                    aria-label="Land Case"
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
                <td className="imp">
                  <input
                    type="text"
                    value={imp}
                    className="form-control form-control-sm dropdown-toggle"
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
                <td className="court">
                  {" "}
                  <input
                    type="text"
                    value={icourt}
                    className="form-control form-control-sm dropdown-toggle"
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
                <td className="judge">
                  <input
                    type="text"
                    value={judge}
                    className="form-control form-control-sm dropdown-toggle"
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
                <td className=" hall">
                  <input
                    type="text"
                    value={hall}
                    className="form-control form-control-sm dropdown-toggle"
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
                        I ASJ for SPE and ACB cum V ACJ
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
          <div className="input-table">
            <table className="button-table">
              <tr className="button-row">
                <td
                  className="button-data"
                  onClick={(e) => setSpecific("Wstmt")}
                >
                  WSTMT/COUNT
                </td>
                <td
                  className="button-data"
                  onClick={(e) => setSpecific("Relief")}
                >
                  RELIEF
                </td>
                <td className="button-data">PETITIONER(s)</td>
                <td className="button-data">RESPONDANTS(s)</td>
                <td className="button-data">PROPERTY</td>
                <td className="button-data">TSLR</td>
                <td className="button-data">EXTENT</td>
                <td className="button-data">MANDAL</td>
              </tr>
              <tr className="button-row">
                <td className="button-data">PAHANI</td>
                <td className="button-data">LAND STATUS</td>
                <td className="button-data">OTHER GOVT. DEPTS.</td>
                <td className="button-data">FILE NO.(s)</td>
                <td className="button-data">OTHER CASES</td>
                <td className="button-data">POSTING DATES</td>
                <td className="button-data">GP</td>
                <td className="button-data">MAIN CASE STATUS</td>
              </tr>
            </table>
          </div>
          <div className="specific-parent">
            <Wstmt />
            {/* <Relief /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
