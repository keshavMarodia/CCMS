import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Case from "../Case/Case";
import Extent from "../Extent/Extent";
import Govt from "../Govt/Govt";
import Pleader from "../Pleader/Pleader";
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
  const { court, caseType, caseNo, caseYear } = location.state;
  const params = {
    court: court,
    caseType: caseType,
    caseNo: caseNo,
    caseYear: caseYear,
  };
  const [data, setData] = useState(undefined);
  const [yesNoArray, setYesNoArray] = useState(["NO", "YES"]);
  const [filedArray, setFilledArray] = useState([
    "PVT. PARTY",
    "COLLECTOR",
    "JOINT COLLECTOR",
    "RDO",
    "MRO",
  ]);
  const [icourtArray, setICourtArray] = useState([
    "CITY-CIVIL-COURT-HYD",
    "CITY-CIVIL-COURT-SECBAD",
    "HIGH-COURT",
    "WKAF-TRIBUNAL-CCC-HYD",
  ]);
  const [judgeArray, setJudgeArray] = useState([
    "JR. CIVIL JUDGE",
    "SR. CIVIL JUDGE",
    "ADDL. SR. CIVIL JUDGE",
    "ADDL. CHIEF JUDGE",
    "CHIEF JUDGE",
    "NIL",
  ]);
  const [hallArray, setHallArray] = useState(["SELECT JUDGE DESIGNATION"]);
  const [specificArrayOne, setSpecificArrayOne] = useState([
    "WSTMT/COUNT",
    "RELIEF",
    "PETITIONER(S)",
    "RESPONDENT(S)",
    "PROPERTY",
    "TSLR",
    "EXTENT",
    "MANDAL",
  ]);
  const [specificArrayTwo, setSpecificArrayTwo] = useState([
    "PAHANI",
    "LAND STATUS",
    "OTHER GOVT. DEPT.",
    "FILE NO.(S)",
    "OTHER CASES",
    "POSTING DETAILS",
    "GOVT. PLEADER",
    "MAIN CASE STATUS",
  ]);
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
  useEffect(() => {
    if (judge == "JR. CIVIL JUDGE") {
      setHallArray([
        "I JUNIOR CIVIL JUDGE",
        "II JUNIOR CIVIL JUDGE",
        "III JUNIOR CIVIL JUDGE",
        "IV JUNIOR CIVIL JUDGE",
        "V JUNIOR CIVIL JUDGE",
        "VI JUNIOR CIVIL JUDGE",
        "VII JUNIOR CIVIL JUDGE",
        "VIII JUNIOR CIVIL JUDGE",
        "IX JUNIOR CIVIL JUDGE",
        "X  JUNIOR CIVIL JUDGE",
        "XI  JUNIOR CIVIL JUDGE",
        "XIX  JUNIOR CIVIL JUDGE",
        "XX  JUNIOR CIVIL JUDGE",
        "XXI  JUNIOR CIVIL JUDGE",
        "XXII  JUNIOR CIVIL JUDGE",
      ]);
    } else if (judge == "SR. CIVIL JUDGE") {
      setHallArray([
        "I SENIOR CIVIL JUDGE",
        "II SENIOR CIVIL JUDGE",
        "III SENIOR CIVIL JUDGE",
        "IV SENIOR CIVIL JUDGE",
        "V SENIOR CIVIL JUDGE",
        "VII SENIOR CIVIL JUDGE",
        "XVII SENIOR CIVIL JUDGE",
        "XVII SENIOR CIVIL JUDGE",
        "WAQF TRIBUNAL",
      ]);
    } else if (judge == "ADDL. SR. CIVIL JUDGE") {
      setHallArray([
        "VIII ADDL SENIOR CIVIL JUDGE",
        "IX ADDL SENIOR CIVIL JUDGE",
        "X ADDL SENIOR CIVIL JUDGE",
        "XI ADDL SENIOR CIVIL JUDGE",
        "I ASJ FOR SPE AND ACB CUM V ACJ",
      ]);
    } else if (judge == "ADDL. CHIEF JUDGE") {
      setHallArray([
        "I ADDL CHIEF JUDGE",
        "II ADDL CHIEF JUDGE",
        "III ADDL CHIEF JUDGE",
        "IV ADDL CHIEF JUDGE",
        "IX ADDL CHIEF JUDGE",
        "X ADDL  CHIEF JUDGE",
        "XI ADDL CHIEF JUDGE",
        "XII ADDL CHIEF JUDGE",
        "XIII ADDL CHIEF JUDGE (FAST TRACK)",
        "XIV ADDL CHIEF JUDGE (FAST TRACK)",
        "XXIV ADDL CHIEF JUDGE",
        "XXV ADDL CHIEF JUDGE",
        "XXVI ADDL CHIEF JUDGE",
        "FAMILY COURT",
        "ADDL FAMILY COURT",
      ]);
    } else if (judge == "CHIEF JUDGE") {
      setHallArray(["CHIEF JUDGE"]);
    } else if (judge == "NIL") {
      setHallArray(["SELECT JUDGE DESIGNATION"]);
    } else {
      setHallArray(["SELECT JUDGE DESIGNATION"]);
    }
  }, [judge]);
  async function setAttribute(value, type) {
    switch (type) {
      case "filedBy":
        setFiled(value);
        const filed = { filedBy: value };
        await updateCase(filed);
        break;
      case "imp":
        setImp(value);
        const imp = { impCase: value === "YES" ? true : false };
        await updateCase(imp);
        break;
      case "landCase":
        setLand(value);
        const land = { landCase: value == "YES" ? true : false };
        await updateCase(land);
        break;
      case "icourt":
        setiCourt(value);
        const icourt = { icourt: value };
        await updateCase(icourt);
        break;
      case "judge":
        setJudge(value);
        const judge = { judgeDesig: value };
        await updateCase(judge);
        break;
      case "courtHall":
        setHall(value);
        const courthall = { courtHall: value };
        await updateCase(courthall);
        break;

      default:
        console.log("invalid type");
    }
  }

  async function updateCase(caseObj) {
    const newFlag = { isNewCase: false };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...params, ...newFlag, ...caseObj }),
    };

    const resp = await fetch("http://localhost:8000/case", requestOptions);
    const result = await resp.json();
    return result;
  }

  useEffect(() => {
    async function saveNewCase() {
      const newFlag = { isNewCase: true };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...params, ...newFlag }),
      };

      const resp = await fetch("http://localhost:8000/case", requestOptions);
      const result = await resp.json();
      return result;
    }
    async function fetchData() {
      const resp = await fetch(
        "http://localhost:8000/case?" + new URLSearchParams(params).toString()
      );
      const result = await resp.json();
      console.log(result);
      if (result.length > 0) {
        setData(result[0]);
      } else {
        const savedResp = await saveNewCase(params);
        console.log(savedResp);
        setData(savedResp[0]);
      }
      setFiled(result[0]["filedBy"]);
      setImp(result[0]["impCase"] ? "YES" : "NO");
      setLand(result[0]["landCase"] ? "YES" : "NO");
      setiCourt(result[0]["icourt"]);
      setHall(result[0]["courtHall"]);
      setJudge(result[0]["judgeDesig"]);
    }
    fetchData();
  }, []);

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
                    {filedArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "filedBy")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
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
                    {yesNoArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "landCase")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
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
                    {yesNoArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "imp")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
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
                    {icourtArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "icourt")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
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
                    {judgeArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "judge")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
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
                    {hallArray.map(function (value, index) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => setAttribute(value, "courtHall")}
                          >
                            {value}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div className="input-table">
            <table className="button-table">
              <tr className="button-row">
                {specificArrayOne.map(function (value, index) {
                  return (
                    <td
                      id={index}
                      className="button-data"
                      onClick={(e) => {
                        setSpecific(
                          specific.map((val, idx) =>
                            idx === index ? true : false
                          )
                        );
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
              <tr className="button-row">
                {specificArrayTwo.map(function (value, index) {
                  return (
                    <td
                      id={index + 8}
                      className="button-data"
                      onClick={(e) => {
                        setSpecific(
                          specific.map((val, idx) =>
                            idx === index + 8 ? true : false
                          )
                        );
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            </table>
          </div>
          <div className="specific-parent">
            {specific[0] && <Wstmt data={data} updateCase={updateCase} />}
            {specific[1] && <Relief data={data} updateCase={updateCase} />}
            {specific[2] && <Petitioner data={data} updateCase={updateCase}/>}
            {specific[3] && <Respondent data={data} updateCase={updateCase}/>}
            {specific[4] && <Property data={data} updateCase={updateCase}/>}
            {specific[5] && <Tslr data={data} updateCase={updateCase} />}
            {specific[6] && <Extent data={data} updateCase={updateCase} />}
            {specific[7] && <Mandal data={data} updateCase={updateCase} />}
            {specific[8] && <Pahani data={data} updateCase={updateCase} />}
            {specific[9] && <Status data={data} updateCase={updateCase} />}
            {specific[10] && <Govt data={data} updateCase={updateCase} />}
            {specific[11] && <File data={data} updateCase={updateCase} />}
            {specific[12] && <Case data={data} updateCase={updateCase}/>}
            {specific[13] && <Posting data={data} updateCase={updateCase} />}
            {specific[14] && <Pleader data={data} updateCase={updateCase}/>}
            {specific[15] && <MainCase />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
