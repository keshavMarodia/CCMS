import { useState } from "react";
import "./Extent.css";
const Extent = () => {
  const [extent, setExtent] = useState("");
  return (
    <div className="extent-parent">
      <div className="extent-form">
        <div className="input-group mb-3 extent">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Extent Of Land In Sq. Yards
          </span>
          <input
            type="text"
            value={extent}
            onChange={(e) => setExtent(e.target.value)}
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

export default Extent;
