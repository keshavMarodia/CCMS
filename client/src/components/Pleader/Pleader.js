import { useState } from "react";
import "./Pleader.css";
const Pleader = () => {
  const [pleaderArray, setPleaderArray] = useState(["GP", "AGP", "SPECIAL GP"]);
  const [pleader, setPleader] = useState("");
  return (
    <div className="pleader=parent">
      <div className="intro-heading">Government Pleader</div>
      <div className="pleader-form">
        <div className="input-group mb-3 pleader-input">
          <span
            className="input-group-text accent main-accent wstmt-accent"
            id="basic-addon1"
          >
            Govt. Pleader
          </span>
          <input
            type="text"
            value={pleader}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu pleader-scroll" role="menu">
            {pleaderArray.map(function (value, index) {
              return (
                <li>
                  <div
                    id={index}
                    className="dropdown-item"
                    onClick={(e) => setPleader(value)}
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
        <div className="specific-button">Save</div>
      </div>
    </div>
  );
};

export default Pleader;
