import { useState } from "react";
import "./Wstmt.css";

const Wstmt = ( { data ,updateCase } ) => {
  const [wstmt, setWstmt] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].wscf : "");
  const [wstmtNo, setWstmtNo] = useState(data?.wstmtOptions[0]?.wscf === "NO" ? true :false);
  const [wstmtYes, setWstmtYes] = useState(data?.wstmtOptions[0]?.wscf === "YES" ? true :false);
  const [wstmtOther, setWstmtOther] = useState(data?.wstmtOptions[0]?.wscf === "OTHER DEPT. TO BE FILLED" ? true :false);
  const [pending, setPending] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].pendingAt : "");
  const [reason, setReason] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].reasonforPend : "");
  const datesetter = new Date(data.wstmtOptions[0].noticeDate).toLocaleString().split(',')[0];
  const [notice, setNotice] = useState(datesetter?.length > 0? datesetter:  "");
  const [wstmtNoOther, setWstmtNoOther] = useState(data?.wstmtOptions[0]?.pendingAt === "OTHERS" ? true: false);
  const [wstmtNoOtherReason, setWstmtNoOtherReason] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].specifyOthers :"");
  const [counter, setCounter] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].coAffidavit  : "");
  const [dept, setDept] = useState(data?.wstmtOptions?.length > 0 ? data.wstmtOptions[0].deptName :"");

  function updateWstmt(){
    const wstmtvalues = { 
      "wscf": wstmt,
      "noticeDate" : notice,
      "pendingAt" : pending,
      "reasonforPend" : reason,
      "coAffidavit" : counter,
      "deptName" : dept,
      "specifyOthers" : wstmtNoOtherReason
    };
    updateCase({"wstmtOptions" : [wstmtvalues]});
  }
  return (
    <div className="wstmt-parent">
      <div className="intro-heading">Written Statement/Counter Filed</div>
      <div className="wstmt-form">
        <div className="wstmt-drop">
          <div className="input-group mb-3 wstmt-input">
            <span
              className="input-group-text accent main-accent wstmt-accent"
              id="basic-addon1"
            >
              Written stmt./Counter Filed
            </span>
            <input
              type="text"
              value={wstmt}
              className="form-control dropdown-toggle"
              aria-describedby="basic-addon1"
              data-bs-toggle="dropdown"
              required
            />
            <ul className="dropdown-menu wstmt-scroll" role="menu">
              <li>
                <div
                  className="dropdown-item"
                  onClick={(e) => (
                    setWstmt("NO"),
                    setWstmtNo(true),
                    setWstmtYes(false),
                    setWstmtOther(false)
                  )}
                >
                  NO
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={(e) => (
                    setWstmt("YES"),
                    setWstmtNo(false),
                    setWstmtYes(true),
                    setWstmtOther(false)
                  )}
                >
                  YES
                </div>
              </li>
              <li>
                <div
                  className="dropdown-item"
                  onClick={(e) => (
                    setWstmt("OTHER DEPT. TO BE FILLED"),
                    setWstmtNo(false),
                    setWstmtYes(false),
                    setWstmtOther(true)
                  )}
                >
                  OTHER DEPT. TO BE FILLED
                </div>
              </li>
            </ul>
          </div>
          <div className="specific-button-container">
            <div className="specific-button" onClick={updateWstmt()}>Save</div>
          </div>
        </div>
        <div className="wstmt-result">
          {wstmtNo && (
            <div className="wstmt-no-parent">
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Notice Received Date
                </span>
                <input
                  type="date"
                  value={notice}
                  onChange={(e) => setNotice(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Pending At
                </span>
                <input
                  type="text"
                  value={pending}
                  className="form-control dropdown-toggle"
                  aria-describedby="basic-addon1"
                  data-bs-toggle="dropdown"
                  required
                />
                <ul className="dropdown-menu wstmt-scroll" role="menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => (
                        setPending("MRO"), setWstmtNoOther(false)
                      )}
                    >
                      MRO
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => (
                        setPending("COLLECTORATE"), setWstmtNoOther(false)
                      )}
                    >
                      COLLECTORATE
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => (
                        setPending("GP"), setWstmtNoOther(false)
                      )}
                    >
                      GP
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={(e) => (
                        setPending("OTHERS"), setWstmtNoOther(true)
                      )}
                    >
                      OTHERS
                    </div>
                  </li>
                </ul>
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Reason For Pending
                </span>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              {wstmtNoOther && (
                <div className="input-group mb-3">
                  <span
                    className="input-group-text accent main-accent"
                    id="basic-addon1"
                  >
                    Specify Other
                  </span>
                  <input
                    type="text"
                    value={wstmtNoOtherReason}
                    onChange={(e) => setWstmtNoOtherReason(e.target.value)}
                    className="form-control"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
              )}
            </div>
          )}
          {wstmtYes && (
            <div className="wstmt-yes-parent">
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Counter Affidavit Filed Date
                </span>
                <input
                  type="date"
                  value={counter}
                  onChange={(e) => setCounter(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Notice Received Date
                </span>
                <input
                  type="date"
                  value={notice}
                  onChange={(e) => setNotice(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
          )}
          {wstmtOther && (
            <div className="wstmt-other-parent">
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Notice Received Date
                </span>
                <input
                  type="date"
                  value={notice}
                  onChange={(e) => setNotice(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text accent main-accent"
                  id="basic-addon1"
                >
                  Department Name
                </span>
                <input
                  type="text"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="form-control"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wstmt;
