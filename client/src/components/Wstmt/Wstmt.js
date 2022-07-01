import { useState } from "react";
import "./Wstmt.css";
const Wstmt = () => {
  const [wstmt, setWstmt] = useState("");
  const [wstmtNo, setWstmtNo] = useState(false);
  const [wstmtYes, setWstmtYes] = useState(false);
  const [wstmtOther, setWstmtOther] = useState(false);
  const [pending, setPending] = useState("");
  const [reason, setReason] = useState("");
  const [notice, setNotice] = useState("");
  const [wstmtNoOther, setWstmtNoOther] = useState(false);
  const [wstmtNoOtherReason, setWstmtNoOtherReason] = useState("");
  const [counter, setCounter] = useState("");
  const [dept, setDept] = useState("");
  return (
    <div className="wstmt-parent">
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
                  setWstmt("No"),
                  setWstmtNo(true),
                  setWstmtYes(false),
                  setWstmtOther(false)
                )}
              >
                No
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setWstmt("Yes"),
                  setWstmtNo(false),
                  setWstmtYes(true),
                  setWstmtOther(false)
                )}
              >
                Yes
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setWstmt("Other Dept. To Be Filled"),
                  setWstmtNo(false),
                  setWstmtYes(false),
                  setWstmtOther(true)
                )}
              >
                Other Dept. To Be Filled
              </div>
            </li>
          </ul>
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
                    onClick={(e) => (setPending("MRO"), setWstmtNoOther(false))}
                  >
                    MRO
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setPending("Collectorate"), setWstmtNoOther(false)
                    )}
                  >
                    Collectorate
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (setPending("GP"), setWstmtNoOther(false))}
                  >
                    GP
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => (
                      setPending("Others"), setWstmtNoOther(true)
                    )}
                  >
                    Others
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
  );
};

export default Wstmt;
