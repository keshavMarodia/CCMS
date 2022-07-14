import { useState } from "react";
import "./File.css";

const File = ({data  , updateCase }) => {
  const [mro, setMro] = useState((data?.fileNo?.MROfileNo && data?.fileNo?.MROfileNo.length >0) ? data?.fileNo?.MROfileNo : ["","",""]);
  const [dro, setDro] = useState((data?.fileNo?.DROfileNo && data?.fileNo?.DROfileNo.length >0) ? data?.fileNo?.DROfileNo : ["","",""]);
  const [collectorate, setCollectorate] = useState((data?.fileNo?.collectorateFileNo && data?.fileNo?.collectorateFileNo.length >0) ? data?.fileNo?.collectorateFileNo : ["","",""]);
  console.log([mro]);
  console.log([dro]);
  console.log([collectorate]);

  function updatefileNo(isSave){
    if(isSave){
      const fileNoValues = { 
      "MROfileNo" : mro ,
      "DROfileNo" : dro ,
      "collectorateFileNo" : collectorate
    };
    updateCase({"fileNo" : fileNoValues});
  }
  }

  function setAttr(type, ind, newval) {
    switch(type) {
    case "mro":
      setMro(mro.map((val, idx) => (idx === ind ? newval : val)));
      break;
    case "dro":
      setDro(dro.map((val, idx) => (idx === ind ? newval : val)));
      break;
    case "collectorate":
      setCollectorate(collectorate.map((val, idx) => (idx === ind ? newval : val)))
      break;
    default:
      console.log('Unhanddle case');
    }
}

  return (
    <div className="file-parent">
      <div className="intro-heading">File Number</div>
      <div className="file-form">
        <div className="mb-4 file-input">
          <label
            for="exampleFormControlTextarea1"
            className="form-label file-label"
          >
            MRO File No.
          </label>
          <div className="file-text-container">
            <input
              type="text"
              value={mro[0]}
              onChange={(e) => {
                setAttr("mro",0, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={mro[1]}
              onChange={(e) => {
                setAttr("mro",1, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={mro[2]}
              onChange={(e) => {
                setAttr("mro",2, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
        <div className="mb-4 file-input">
          <label
            for="exampleFormControlTextarea1"
            className="form-label file-label"
          >
            DRO File No.
          </label>
          <div className="file-text-container">
            <input
              type="text"
              value={dro[0]}
              onChange={(e) => {
                setAttr("dro",0, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={dro[1]}
              onChange={(e) => {
                setAttr("dro",1, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={dro[2]}
              onChange={(e) => {
                setAttr("dro",2, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
        <div className="mb-4 file-input">
          <label
            for="exampleFormControlTextarea1"
            className="form-label file-label"
          >
            Collectorate File No.
          </label>
          <div className="file-text-container">
            <input
              type="text"
              value={collectorate[0]}
              onChange={(e) => {
                setAttr("collectorate",0, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={collectorate[1]}
              onChange={(e) => {
                setAttr("collectorate",1, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
            /
            <input
              type="text"
              value={collectorate[2]}
              onChange={(e) => {
                setAttr("collectorate",2, e.target.value);
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={() => updatefileNo(true)}>Save</div>
      </div>
    </div>
  );
};

export default File;
