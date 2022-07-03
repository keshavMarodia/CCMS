import { useState } from "react";
import "./Relief.css";
const Relief = () => {
  const [relief, setRelief] = useState("");
  return (
    <div className="relief-parent">
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
        <div className="specific-button-container">
          <div className="specific-button">Save</div>
        </div>
      </div>
    </div>
  );
};

export default Relief;
