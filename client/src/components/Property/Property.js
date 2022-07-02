import { useState } from "react";
import "./Property.css";
const Property = () => {
  const [property, setProperty] = useState("");
  return (
    <div className="property-parent">
      <div className="mb-4 property">
        <label for="exampleFormControlTextarea1" className="form-label">
          Property
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default Property;
