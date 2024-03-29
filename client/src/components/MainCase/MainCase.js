import { useState } from "react";
import Interim from "../Interim/Interim";
import Sub from "../Sub/Sub";
import "./MainCase.css";

const MainCase = ({ data, updateCase }) => {
  const [mainCaseStatus, setMainCaseStatus] = useState(
    data?.mainCaseStatus ? data.mainCaseStatus.mainStatus : ""
  );
  const [mainPending, setMainPending] = useState(
    data?.mainCaseStatus?.mainStatus === "PENDING" ? true : false
  );
  const [favour, setFavour] = useState(data?.mainCaseStatus?.mainStatus === "DISPOSED IN FAVOUR OF GOVT."
  ? true
  : false);
  const [against, setAgainst] = useState(data?.mainCaseStatus?.mainStatus === "DISPOSED AGAINST GOVT."
  ? true
  : false);
  const [direction, setDirection] = useState(
    data?.mainCaseStatus?.mainStatus === "DISPOSED WITH CERTAIN DIRECTIONS"
      ? true
      : false
  );
  const [dismissed, setDismissed] = useState(
    data?.mainCaseStatus?.mainStatus === "DISMISSED" ? true : false
  );
  const [pendInterim, setPendInterim] = useState(
    data?.mainCaseStatus?.pending === "INTERIM ORDERS" ? true : false
  );
  const [pendWpmp, setPendWpmp] = useState(
    data?.mainCaseStatus?.pending === "WPMP FILED" ? true : false
  );
  const [pendCc, setPendCc] = useState(
    data?.mainCaseStatus?.pending === "CC FILED" ? true : false
  );
  const [againstInterim, setAgainstInterim] = useState( data?.mainCaseStatus?.againstGovt === "INTERIM ORDERS" ? true : false);
  const [againstWpmp, setAgainstWpmp] = useState(data?.mainCaseStatus?.againstGovt === "WPMP FILED" ? true : false);
  const [againstCc, setAgainstCc] = useState(data?.mainCaseStatus?.againstGovt === "CC FILED" ? true : false);
  const [dismissedArray, setDismissedArray] = useState([
    "DISMISSED FOR NON PROSCUTION BY GOVT",
    "DISMISSED FOR NON PROSCUTION BY PVT. GOVT",
    "DISMISSED AS WITHDRAWN BY GOVT",
    "DISMISSED AS WITHDRAWN BY PVT. PARTY",
    "OTHERS",
  ]);
  const [yesArray, setYesArray] = useState(["YES", "NO"]);
  const [appealArray, setAppealArray] = useState([
    "APPEAL FIELD",
    "NO APPEAL",
    "POSSESSION TAKEN BUT CASE IS PENDING",
    "FILED NEW FRESH CASE",
  ]);
  const [pendingYes, setPendingYes] = useState(
    data?.mainCaseStatus?.pending ? data.mainCaseStatus.pending : ""
  );
  const [favourYes, setFavourYes] = useState(data?.mainCaseStatus?.remarks ? data.mainCaseStatus.remarks : "");
  const [caveat, setCaveat] = useState(data?.mainCaseStatus?.caveatPetition ? data.mainCaseStatus.caveatPetition : "");
  const [appeal, setAppeal] = useState(data?.mainCaseStatus?.appeal ? data.mainCaseStatus.appeal : "");
  const [againstYes, setAgainstYes] = useState(data?.mainCaseStatus?.againstGovt ? data.mainCaseStatus.againstGovt : "");
  const [dismissedYes, setDismissedYes] = useState(
    data?.mainCaseStatus?.dismissedYes
      ? data.mainCaseStatus.dismissedYes
      : ""
  );
  const [directionYes, setDirectionYes] = useState(
    data?.mainCaseStatus?.directionYes
      ? data.mainCaseStatus.directionYes
      : ""
  );

  async function updateMainCase(caseDetails) {
    if (caseDetails === "dismiss/direction") {
      const mainCasevalues = {
        "mainStatus": mainCaseStatus,
        "dismissedYes": dismissedYes,
        "directionYes": directionYes,
      };
      updateCase({ mainCaseStatus: mainCasevalues });
    }
    else if (caseDetails.type === "INTERIM") {
      const mainCasevalues = {
        "mainStatus": mainCaseStatus,
        "pending": pendingYes,
        "caveatPetition" : caveat,
        "appeal" :appeal,
        "remarks" :favourYes,
        "againstGovt": againstYes,
        ...caseDetails.interim,
      };
      updateCase({ mainCaseStatus: mainCasevalues });
    }
    else if (caseDetails) {
      const mainCasevalues = {
        "mainStatus": mainCaseStatus,
        "pending": pendingYes,
        "caveatPetition" : caveat,
        "appeal" :appeal,
        "remarks" :favourYes,
        "againstGovt": againstYes,
        "subCase" : caseDetails,
      };
      updateCase({ mainCaseStatus: mainCasevalues });
    }
  }

  return (
    <div className="main-case-parent">
      <div className="intro-heading">Main Case Status</div>
      <div className="main-case-form">
        <div className="input-group mb-3 main-case-input">
          <span
            className="input-group-text accent main-case-accent"
            id="basic-addon1"
          >
            Main Case Status
          </span>
          <input
            type="text"
            value={mainCaseStatus}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu main-case-scroll" role="menu">
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setMainCaseStatus("PENDING"),
                  setMainPending(true),
                  setFavour(false),
                  setAgainst(false),
                  setDirection(false),
                  setDismissed(false)
                )}
              >
                PENDING
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setMainCaseStatus("DISPOSED IN FAVOUR OF GOVT."),
                  setMainPending(false),
                  setFavour(true),
                  setAgainst(false),
                  setDirection(false),
                  setDismissed(false)
                )}
              >
                DISPOSED IN FAVOUR OF GOVT.
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setMainCaseStatus("DISPOSED AGAINST GOVT."),
                  setMainPending(false),
                  setFavour(false),
                  setAgainst(true),
                  setDirection(false),
                  setDismissed(false)
                )}
              >
                DISPOSED AGAINST GOVT.
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setMainCaseStatus("DISPOSED WITH CERTAIN DIRECTIONS"),
                  setMainPending(false),
                  setFavour(false),
                  setAgainst(false),
                  setDirection(true),
                  setDismissed(false)
                )}
              >
                DISPOSED WITH CERTAIN DIRECTIONS
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setMainCaseStatus("DISMISSED"),
                  setMainPending(false),
                  setFavour(false),
                  setAgainst(false),
                  setDirection(false),
                  setDismissed(true)
                )}
              >
                DISMISSED
              </div>
            </li>
          </ul>
        </div>
      </div>
      {mainPending && (
        <div className="pending-yes-parent">
          <div className="pending-yes-form">
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Pending
              </span>
              <input
                type="text"
                value={pendingYes}
                className="form-control dropdown-toggle"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu main-case-scroll" role="menu">
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setPendingYes("INTERIM ORDERS"),
                      setPendInterim(true),
                      setPendWpmp(false),
                      setPendCc(false)
                    )}
                  >
                    INTERIM ORDERS
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setPendingYes("WPMP FILED"),
                      setPendInterim(false),
                      setPendWpmp(true),
                      setPendCc(false)
                    )}
                  >
                    WPMP FILED
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setPendingYes("CC FILED"),
                      setPendInterim(false),
                      setPendWpmp(false),
                      setPendCc(true)
                    )}
                  >
                    CC FILED
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {pendInterim && (
            <Interim interimdata={data} updateMainCase={updateMainCase} />
          )}
          {pendWpmp && <Sub data={data} updateMainCase={updateMainCase} />}
          {pendCc && <Sub data={data} updateMainCase={updateMainCase} />}
        </div>
      )}
      {favour && (
        <div className="favour-yes-parent">
          <div className="favour-yes-form">
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Caveat Petition Filed
              </span>
              <input
                type="text"
                value={caveat}
                className="form-control dropdown-toggle"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu main-case-scroll" role="menu">
                {yesArray.map(function (value, index) {
                  return (
                    <li id={"caveat" + index}>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setCaveat(value)}
                      >
                        {value}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Appeal/Fresh Case Filed By Other Party
              </span>
              <input
                type="text"
                value={appeal}
                className="form-control dropdown-toggle"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu main-case-scroll" role="menu">
                {appealArray.map(function (value, index) {
                  return (
                    <li id={"appeal" + index}>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setAppeal(value)}
                      >
                        {value}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Remarks(if any)
              </span>
              <input
                type="text"
                value={favourYes}
                onChange={(e) => setFavourYes(e.target.value)}
                className="form-control"
                aria-describedby="basic-addon1"
                required
              />
            </div>
          </div>
          <Sub data={data} updateMainCase={updateMainCase}/>
        </div>
      )}
      {against && (
        <div className="against-yes-parent">
          <div className="against-yes-form">
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Against Govt.
              </span>
              <input
                type="text"
                value={againstYes}
                className="form-control dropdown-toggle"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu main-case-scroll" role="menu">
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setAgainstYes("INTERIM ORDERS"),
                      setAgainstInterim(true),
                      setAgainstWpmp(false),
                      setAgainstCc(false)
                    )}
                  >
                    INTERIM ORDERS
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setAgainstYes("WPMP FILED"),
                      setAgainstInterim(false),
                      setAgainstWpmp(true),
                      setAgainstCc(false)
                    )}
                  >
                    WPMP FILED
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setAgainstYes("CC FILED"),
                      setAgainstInterim(false),
                      setAgainstWpmp(false),
                      setAgainstCc(true)
                    )}
                  >
                    CC FILED
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {againstInterim && <Interim  interimdata={data} updateMainCase={updateMainCase}/>}
          {againstWpmp && <Sub data={data} updateMainCase={updateMainCase}/>}
          {againstCc && <Sub data={data} updateMainCase={updateMainCase} />}
        </div>
      )}
      {direction && (
        <div className="direction-yes-parent">
          <div className="direction-yes-form">
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Remarks
              </span>
              <input
                type="text"
                value={directionYes}
                onChange={(e) => setDirectionYes(e.target.value)}
                className="form-control"
                aria-describedby="basic-addon1"
                required
              />
            </div>
          </div>
          <div className="specific-button-container">
            <div
              className="specific-button"
              onClick={() => updateMainCase("dismiss/direction")}
            >
              Save
            </div>
          </div>
        </div>
      )}
      {dismissed && (
        <div className="dismissed-yes-parent">
          <div className="dismissed-yes-form">
            <div className="input-group mb-3 main-case-input">
              <span
                className="input-group-text accent main-case-accent"
                id="basic-addon1"
              >
                Dismissed
              </span>
              <input
                type="text"
                value={dismissedYes}
                className="form-control dropdown-toggle"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
                required
              />
              <ul className="dropdown-menu main-case-scroll" role="menu">
                {dismissedArray.map(function (value, index) {
                  return (
                    <li id={"dismissedYes" + index}>
                      <div
                        className="dropdown-item"
                        onClick={(e) => setDismissedYes(value)}
                      >
                        {value}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="specific-button-container">
            <div
              className="specific-button"
              onClick={() => updateMainCase("dismiss/direction")}
            >
              Save
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCase;
