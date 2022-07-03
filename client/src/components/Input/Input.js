import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Case from "../Case/Case";
import Extent from "../Extent/Extent";
import Govt from "../Govt/Govt";
import Gp from "../Gp/Gp";
import MainCase from "../MainCase/MainCase";
import Mandal from "../Mandal/Mandal";
import Navbar from "../Navbar/Navbar";
import Pahani from "../Pahani/Pahani";
import Petitioner from "../Petitioner/Petitioner";
import Posting from "../Posting/Posting";
import Property from "../Property/Property";
import Relief from "../Relief/Relief";
import Respondent from "../Respondent/Respondent";
import Status from "../Status/Status";
import Tslr from "../Tslr/Tslr";
import Wstmt from "../Wstmt/Wstmt";
import File from "../File/File";
import "./Input.css";
const Input = () => {
  const location = useLocation();
  const { caseType, caseNo, caseYear } = location.state;
  const [imp, setImp] = useState("");
  const [land, setLand] = useState("");
  const [filed, setFiled] = useState("");
  const [icourt, setiCourt] = useState("");
  const [judge, setJudge] = useState("");
  const [hall, setHall] = useState("");
  const [specific, setSpecific] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(specific);
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
                  onClick={(e) => {
                    setSpecific(
                      specific.map((val, idx) => (idx === 0 ? true : false))
                    );
                  }}
                >
                  WSTMT/COUNT
                </td>
                <td
                  className="button-data"
                  onClick={(e) => {
                    setSpecific(
                      specific.map((val, idx) => (idx === 1 ? true : false))
                    );
                  }}
                >
                  RELIEF
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 2 ? true : false))
                    )
                  }
                >
                  PETITIONER(s)
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 3 ? true : false))
                    )
                  }
                >
                  RESPONDENTS(s)
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 4 ? true : false))
                    )
                  }
                >
                  PROPERTY
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 5 ? true : false))
                    )
                  }
                >
                  TSLR
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 6 ? true : false))
                    )
                  }
                >
                  EXTENT
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 7 ? true : false))
                    )
                  }
                >
                  MANDAL
                </td>
              </tr>
              <tr className="button-row">
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 8 ? true : false))
                    )
                  }
                >
                  PAHANI
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 9 ? true : false))
                    )
                  }
                >
                  LAND STATUS
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 10 ? true : false))
                    )
                  }
                >
                  OTHER GOVT. DEPTS.
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 11 ? true : false))
                    )
                  }
                >
                  FILE NO.(s)
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 12 ? true : false))
                    )
                  }
                >
                  OTHER CASES
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 13 ? true : false))
                    )
                  }
                >
                  POSTING DATES
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 14 ? true : false))
                    )
                  }
                >
                  GP
                </td>
                <td
                  className="button-data"
                  onClick={(e) =>
                    setSpecific(
                      specific.map((val, idx) => (idx === 15 ? true : false))
                    )
                  }
                >
                  MAIN CASE STATUS
                </td>
              </tr>
            </table>
          </div>
          <div className="specific-parent">
            {specific[0] && <Wstmt />}
            {specific[1] && <Relief />}
            {specific[2] && <Petitioner />}
            {specific[3] && <Respondent />}
            {specific[4] && <Property />}
            {specific[5] && <Tslr />}
            {specific[6] && <Extent />}
            {specific[7] && <Mandal />}
            {specific[8] && <Pahani />}
            {specific[9] && <Status />}
            {specific[10] && <Govt />}
            {specific[11] && <File />}
            {specific[12] && <Case />}
            {specific[13] && <Posting />}
            {specific[14] && <Gp />}
            {specific[15] && <MainCase />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
