import { useState } from "react";
import "./Status.css";

const Status = ({data ,updateCase }) => {
  const [status, setStatus] = useState(data?.landStatus?.length >0 ? data.landStatus[0].status : "");
  const [svalue, setSvalue] = useState(data?.landStatus?.length >0 ? data.landStatus[0].value : "" );
  const datesetter = new Date(data.landStatus[0].valuedAtDate).toISOString().split('T')[0];
  const [sdate, setSdate] = useState(data?.landStatus?.length >0 ? datesetter : "" );
  const [statusArray, setStatusArray] = useState([
    "VACANT LAND",
    "SEMI STRUCTURED",
    "FULLY STRUCTURED",
    "OTHERS",
  ]);
  function updateLandStatus(){

    const landvalues = { 
      "valuedAtDate" : sdate,
      "status" : status,
      "value" : svalue
    };

    updateCase({"landStatus" : [landvalues] }) ;
  }
  return (
    <div className="status-parent">
      <div className="intro-heading">Land Status</div>
      <div className="status-form">
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Value As On Date
          </span>
          <input
            type="date"
            value={sdate}
            onChange={(e) => setSdate(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Status
          </span>
          <input
            type="text"
            value={status}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu status-scroll" role="menu">
            {statusArray.map(function (value, index) {
              return (
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => setStatus(value)}
                  >
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 status-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Value
          </span>
          <input
            type="text"
            value={svalue}
            onChange={(e) => setSvalue(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button"  onClick={ updateLandStatus()} >Save</div>
      </div>
    </div>
  );
};

export default Status;
