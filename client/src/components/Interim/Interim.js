import { useState } from "react";
import "./Interim.css";
const Interim = () => {
  const [interimDate, setInterimDate] = useState("");
  const [interimType, setInterimType] = useState("");
  const [force, setForce] = useState("");
  const [interimFile, setinterimFile] = useState("");
  const [interimOther, setInterimOther] = useState("");
  const [specify, setSpecify] = useState(false);
  return (
    <div className="interim-parent">
      <div className="interim-form">
        <div className="input-group mb-3 main-case-input">
          <span
            className="input-group-text accent main-case-accent"
            id="basic-addon1"
          >
            Interim Order Date
          </span>
          <input
            type="date"
            value={interimDate}
            onChange={(e) => setInterimDate(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 main-case-input">
          <span
            className="input-group-text accent main-case-accent"
            id="basic-addon1"
          >
            Interim Orders In Force/Expire
          </span>
          <input
            type="date"
            value={force}
            onChange={(e) => setForce(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 main-case-input">
          <span
            className="input-group-text accent main-accent main-case-accent"
            id="basic-addon1"
          >
            Interim Type
          </span>
          <input
            type="text"
            value={interimType}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu main-case-scroll" role="menu">
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (setInterimType("STAY"), setSpecify(false))}
              >
                STAY
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setInterimType("STATUS QUO"), setSpecify(false)
                )}
              >
                STATUS QUO
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setInterimType("NOT TO DISPOSE"), setSpecify(false)
                )}
              >
                NOT TO DISPOSE
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (
                  setInterimType("NO ORDERS"), setSpecify(false)
                )}
              >
                NO ORDERS
              </div>
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => (setInterimType("OTHERS"), setSpecify(true))}
              >
                OTHERS
              </div>
            </li>
          </ul>
        </div>
        {specify && (
          <div className="input-group mb-3 main-case-input">
            <span
              className="input-group-text accent main-case-accent"
              id="basic-addon1"
            >
              Specify Other
            </span>
            <input
              type="text"
              value={interimOther}
              onChange={(e) => setInterimOther(e.target.value)}
              className="form-control"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        )}
        <div className="input-group mb-3 main-case-input">
          <span
            className="input-group-text accent main-case-accent"
            id="basic-addon1"
          >
            Upload Interim Order Copy
          </span>
          <input
            type="file"
            value={interimFile}
            onChange={(e) => setinterimFile(e.target.value)}
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

export default Interim;
