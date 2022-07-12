import { useState } from "react";
import "./Mandal.css";
const Mandal = ( {data, updateCase } ) => {
  const [mandalArray, settMandalArray] = useState([
    "TIRUMALAGIRI",
    "SHAIKPET",
    "SECUNDERABAD",
    "SAIDHABAD",
    "NAMPALLY",
    "MUSHEERABAD",
    "MAREDPALLY",
    "KHAIRATABAD",
    "HIMAYATNAGAR",
    "GOLCONDA",
    "CHARMINAR",
    "BANDLAGUDA",
    "BAHADURPURA",
    "AMEERPET",
    "ASIFNAGAR",
    "AMBERPET",
  ]);
  const [mandal, setMandal] = useState(data?.mandal?.length >0 ? data.mandal[0].mandalName : "");
  const [village, setVillage] = useState(data?.mandal?.length >0 ? data.mandal[0].village : "");
  const [road, setRoad] = useState(data?.mandal?.length >0 ? data.mandal[0].road : "");
  const [locality, setLocality] = useState(data?.mandal?.length >0 ? data.mandal[0].locality : "");

  function updateMandal(){
    const mandalvalues = { 
      "mandalName" : mandal ,
      "village" : village,
      "road" : road,
      "locality" : locality
    };

    updateCase({"mandal" : [mandalvalues] }) ;
  }
  return (
    <div className="mandal-parent">
      <div className="intro-heading">Mandal</div>
      <div className="mandal-form">
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent wstmt-accent"
            id="basic-addon1"
          >
            Mandal
          </span>
          <input
            type="text"
            value={mandal}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu custom-scroll" role="menu">
            {mandalArray.map(function (value, index) {
              return (
                <li>
                  <div
                    id={index}
                    className="dropdown-item"
                    onClick={(e) => setMandal(value)}
                  >
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent wstmt-accent"
            id="basic-addon1"
          >
            Village
          </span>
          <input
            type="text"
            value={village}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu custom-scroll" role="menu">
            <li>
              <div
                className="dropdown-item"
                onClick={(e) => setVillage("SECUNDERABAD")}
              >
                SECUNDERABAD
              </div>
            </li>
          </ul>
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Road
          </span>
          <input
            type="text"
            value={road}
            onChange={(e) => setRoad(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Locality
          </span>
          <input
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={updateMandal()}>Save</div>
      </div>
    </div>
  );
};

export default Mandal;
