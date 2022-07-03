import { useState } from "react";
import "./File.css";
const File = () => {
  const [mro, setMro] = useState(["", "", ""]);
  const [dro, setDro] = useState(["", "", ""]);
  const [collectorate, setCollectorate] = useState(["", "", ""]);
  console.log(mro);
  console.log(dro);
  console.log(collectorate);
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
                setMro(
                  mro.map((val, idx) => (idx === 0 ? e.target.value : val))
                );
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
                setMro(
                  mro.map((val, idx) => (idx === 1 ? e.target.value : val))
                );
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
                setMro(
                  mro.map((val, idx) => (idx === 2 ? e.target.value : val))
                );
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
                setDro(
                  dro.map((val, idx) => (idx === 0 ? e.target.value : val))
                );
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
                setDro(
                  dro.map((val, idx) => (idx === 1 ? e.target.value : val))
                );
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
                setDro(
                  dro.map((val, idx) => (idx === 2 ? e.target.value : val))
                );
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
                setCollectorate(
                  collectorate.map((val, idx) =>
                    idx === 0 ? e.target.value : val
                  )
                );
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
                setCollectorate(
                  collectorate.map((val, idx) =>
                    idx === 1 ? e.target.value : val
                  )
                );
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
                setCollectorate(
                  collectorate.map((val, idx) =>
                    idx === 2 ? e.target.value : val
                  )
                );
              }}
              className="form-control file-text"
              aria-describedby="basic-addon1"
              required
            />
          </div>
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button">Save</div>
      </div>
    </div>
  );
};

export default File;
