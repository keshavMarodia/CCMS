import { useState, useEffect } from "react";
import "./Respondent.css";

const Respondent = ({ data , updateCase }) => {
  const [resp, setResp] = useState("");
  const [respList, setRespList] = useState(data.respondents || []);
  const [respWarn, setRespWarn] = useState(false);

  function updateRespondent(){
    updateCase({"respondents" : respList});
  }

  const handleClick = (e) => {
    if (resp == "") {
      setRespWarn(true);
    } else {
      setRespWarn(false);
      setRespList((prevName) => {
        return [...prevName, resp];
      });
    }
  };
  const handleDelete = (e, index) => {
    setRespList(respList.filter((x, i) => i !== index));
  };
  return (
    <div className="resp-parent">
      <div className="intro-heading">Respondent(s)</div>
      <div className="resp-form">
        <div className="resp-left">
          <div className="resp-add">
            <div className="input-group mb-3">
              <span
                className="input-group-text accent main-accent"
                id="basic-addon1"
              >
                Respondent(s)
              </span>
              <input
                type="text"
                value={resp}
                onChange={(e) => setResp(e.target.value)}
                className="form-control"
                aria-describedby="basic-addon1"
                required
              />
              <div>
                <div className="resp-button" onClick={handleClick}>
                  +
                </div>
              </div>
            </div>
          </div>
          {respWarn && <div className="resp-warn">Fill Entry</div>}
          <div className="specific-button-container">
            <div className="specific-button" onClick={updateRespondent}>Save</div>
          </div>
        </div>
        <div className="resp-list-parent">
          {respList.map(function (value, index) {
            return (
              <div className="resp-list">
                <div className="resp-index">{index + 1}</div>
                <div className="resp-name">{value}</div>
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

export default Respondent;
