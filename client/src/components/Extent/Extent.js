import { useState } from "react";
import "./Extent.css";
const Extent = ( {data, updateCase }) => {
  const [extent, setExtent] = useState(data?.extent || "");

  function updateExtent(isTrue){
    if(isTrue){
    updateCase({"extent" : extent});
    }
  }
  return (
    <div className="extent-parent">
      <div className="intro-heading">Extent</div>
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
        <div className="specific-button" onClick={() => updateExtent(true)}>Save</div>
      </div>
    </div>
  );
};

export default Extent;
