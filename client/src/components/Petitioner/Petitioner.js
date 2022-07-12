import { useState, useEffect } from "react";
import "./Petitioner.css";

const Petitioner = ({ data , updateCase }) => {
  const [peti, setPeti] = useState("");
  const [petiList, setPetiList] = useState(data.petitioners || []);
  const [petiWarn, setPetiWarn] = useState(false);

  function updatePetitioner(){
    updateCase({"petitioners" : petiList});
  }

  const handleClick = (e) => {
    if (peti == "") {
      setPetiWarn(true);
    } else {
      setPetiWarn(false);
      setPetiList((prevName) => {
        return [...prevName, peti];
      });
    }
  };

  const handleDelete = (e, index) => {
    setPetiList(petiList.filter((x, i) => i !== index));
  };
  return (
    <div className="peti-parent">
      <div className="intro-heading">Petitioner(s)</div>
      <div className="peti-form">
        <div className="peti-left">
          <div className="peti-add">
            <div className="input-group mb-3">
              <span
                className="input-group-text accent main-accent"
                id="basic-addon1"
              >
                Petitioner(s)
              </span>
              <input
                type="text"
                value={peti}
                onChange={(e) => setPeti(e.target.value)}
                className="form-control"
                aria-describedby="basic-addon1"
                required
              />
              <div>
                <div className="peti-button" onClick={handleClick}>
                  +
                </div>
              </div>
            </div>
          </div>
          {petiWarn && <div className="peti-warn">Fill Entry</div>}
          <div className="specific-button-container">
            <div className="specific-button" onClick={updatePetitioner()}>Save</div>
          </div>
        </div>
        <div className="peti-list-parent">
          {petiList.map(function (value, index) {
            return (
              <div className="peti-list">
                <div className="peti-index">{index + 1}</div>
                <div className="peti-name">{value}</div>
                <div className="remove" onClick={(e) => handleDelete(e, index)}>
                  -
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Petitioner;
