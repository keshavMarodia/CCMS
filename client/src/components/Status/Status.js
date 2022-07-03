import { useState } from "react";
import "./Status.css";
const Status = () => {
  const [status, setStatus] = useState("");
  const [svalue, setSvalue] = useState("");
  const [sdate, setSdate] = useState("");
  const [statusArray, setStatusArray] = useState([
    "VACANT LAND",
    "SEMI STRUCTURED",
    "FULLY STRUCTURED",
    "OTHERS",
  ]);
  return (
    <div className="status-parent">
      <div className="intro-heading">Land Status</div>
      <div className="status-form">
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Value As On Date
          </span>
          <input
            type="date"
            value={sdate}
            onChange={(e) => setSdate(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Status
          </span>
          <input
            type="text"
            value={status}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu status-scroll" role="menu">
            {statusArray.map(function (value, index) {
              return (
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => setStatus(value)}
                  >
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Value
          </span>
          <input
            type="text"
            value={svalue}
            onChange={(e) => setSvalue(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button">Save</div>
      </div>
    </div>
  );
};

export default Status;
