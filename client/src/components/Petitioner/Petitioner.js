import { useState } from "react";
import "./Petitioner.css";
import axios from "axios";
const Petitioner = () => {
  const [peti, setPeti] = useState("");
  const [petiList, setPetiList] = useState([]);
  const [petiWarn, setPetiWarn] = useState(false);
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
  // const listURL = "http://localhost:8000/api/list";
  // const see = (e) => {
  //   const data = { petiList };
  //   axios.post(listURL, data).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div className="peti-parent">
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
        {/* <button onClick={see}>fsda</button> */}
      </div>
    </div>
  );
};

export default Petitioner;
