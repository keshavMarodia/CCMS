import { useState, useEffect } from "react";
import "./Tslr.css";
const Tslr = () => {
  const [tslrArray, setTslrArray] = useState([]);
  const [ward, setWard] = useState([]);
  const [block, setBlock] = useState([]);
  const [ts, setTs] = useState([]);
  const [tsExtent, setTsExtent] = useState([]);
  const [old, setOld] = useState([]);
  const [c10, setC10] = useState([]);
  const [c20, setC20] = useState([]);
  const [c30, setC30] = useState([]);
  const [add, setAdd] = useState([]);
  const [tick, setTick] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    tslrArray.length === 0 ? setShow(false) : setShow(true);
  }, [tslrArray]);
  const handleClick = (e) => {
    setTslrArray((prevName) => {
      return [...prevName, "a"];
    });
    setAdd((prevName) => {
      return [...prevName, true];
    });
    setTick((prevName) => {
      return [...prevName, false];
    });
  };
  const handleAdd = (e, index) => {
    setWard((prev) => {
      return [...prev, document.getElementById("ward" + index).value];
    });
    setBlock((prev) => {
      return [...prev, document.getElementById("block" + index).value];
    });
    setTs((prev) => {
      return [...prev, document.getElementById("ts" + index).value];
    });
    setTsExtent((prev) => {
      return [...prev, document.getElementById("tsExtent" + index).value];
    });
    setOld((prev) => {
      return [...prev, document.getElementById("old" + index).value];
    });
    setC10((prev) => {
      return [...prev, document.getElementById("c10" + index).value];
    });
    setC20((prev) => {
      return [...prev, document.getElementById("c20" + index).value];
    });
    setC30((prev) => {
      return [...prev, document.getElementById("c30" + index).value];
    });
    setAdd(add.map((val, idx) => (idx === index ? false : val)));
    setTick(tick.map((val, idx) => (idx === index ? true : val)));
    document.getElementById("add" + index).click(false);
  };
  const handleDelete = (e, index) => {
    setWard(ward.filter((x, i) => i !== index));
    setBlock(block.filter((x, i) => i !== index));
    setTs(ts.filter((x, i) => i !== index));
    setTsExtent(tsExtent.filter((x, i) => i !== index));
    setOld(old.filter((x, i) => i !== index));
    setC10(c10.filter((x, i) => i !== index));
    setC20(c20.filter((x, i) => i !== index));
    setC30(c30.filter((x, i) => i !== index));
    setTslrArray(tslrArray.filter((x, i) => i != index));
  };
  // const listURL = "http://localhost:8000/api/list";
  // const data = { c20 };
  // const see = (e) => {
  //   axios.post(listURL, data).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div className="tslr-parent">
      <div className="tslr-intro">
        <div className="tslr-heading">Town Survey Land Registration (TSLR)</div>
        <div className="tslr-add" onClick={handleClick}>
          Add TSLR
        </div>
      </div>
      <div className="tslr-table">
        <table>
          <tr>
            <th>Ward</th>
            <th>Block</th>
            <th>Ts No.</th>
            <th>Ts Extent</th>
            <th>Old Survey No.</th>
            <th>Col. No. 10</th>
            <th>Col. No. 20</th>
            <th>Col. No. 30</th>
            <th>Add</th>
            <th>Remove</th>
          </tr>
          {tslrArray.map(function (value, index) {
            return (
              <tr id={"row" + index}>
                <td>
                  <input
                    type="text"
                    value={ward[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"ward" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={block[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"block" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={ts[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"ts" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={tsExtent[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"tsExtent" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={old[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"old" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={c10[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"c10" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={c20[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"c20" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={c30[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"c30" + index}
                  />
                </td>
                <td id={"add" + index}>
                  {add[index] && (
                    <div
                      className="add-tslr"
                      onClick={(e) => handleAdd(e, index)}
                    >
                      +
                    </div>
                  )}
                  {tick[index] && (
                    <span class="material-symbols-outlined">done</span>
                  )}
                </td>
                <td>
                  <div
                    className="remove"
                    onClick={(e) => handleDelete(e, index)}
                  >
                    -
                  </div>
                </td>
              </tr>
            );
          })}
          {/* {tick.map(function (value) {
            return <div>dgf</div>;
          })}
          {add.map(function (value) {
            return <div>dfg</div>;
          })}
          {tslrArray.map(function (value) {
            return <div>{value}</div>;
          })}
          <button onClick={see}>dfg</button> */}
        </table>
      </div>
      {show && (
        <div className="specific-button-container">
          <div className="specific-button">Save</div>
        </div>
      )}
    </div>
  );
};

export default Tslr;
