import { useState } from "react";
import "./Property.css";
const Property = ({data , updateCase}) => {
  const [property, setProperty] = useState(data.property || "");
  function updateProperty(){
    updateCase({"property" : property});
  }

  return (
    <div className="property-parent">
      <div className="property-form">
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
      <div className="specific-button-container">
        <div className="specific-button" onClick={updateProperty()}>Save</div>
      </div>
    </div>
  );
};

export default Property;
