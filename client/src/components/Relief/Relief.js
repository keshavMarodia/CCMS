import { useState } from "react";
import "./Relief.css";

const Relief = ({ data, updateCase }) => {
  const [relief, setRelief] = useState(data?.relief || "");

  function updateRelief(isTrue) {
    if(isTrue){
    updateCase({ relief: relief });
    }
  }

  return (
    <div className="relief-parent">
      <div className="relief-form">
        <div className="mb-4 relief">
          <label for="exampleFormControlTextarea1" className="form-label">
            Relief
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={relief}
            onChange={(e) => setRelief(e.target.value)}
            rows="4"
          ></textarea>
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={() => updateRelief(true)}>
          Save
        </div>
      </div>
    </div>
  );
};

export default Relief;
