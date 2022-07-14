import { useState, useEffect } from "react";
import "./Tslr.css";
const Tslr = ({ data ,updateCase }) => {
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
  // const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(false);

  useEffect(() => {
    if(data.tslrOptions.length>0){
      setEntry(false);
      const tslrArr =[] , addArr =[] , tickArr =[] , wardArr =[]  , blockArr =[] , tsnoArr =[] , tsExtentArr =[] , oldArr =[] , c10Arr =[] , c20Arr =[] , c30Arr = [];
      data.tslrOptions.forEach((element, index) => {
        tslrArr.push("a");
        addArr.push(false);
        tickArr.push(true);
        wardArr.push(element.ward);
        blockArr.push(element.block);
        tsnoArr.push(element.tsno);
        tsExtentArr.push(element.tsExtent);
        oldArr.push(element.oldSurveyNo);
        c10Arr.push(element.colNo10);
        c20Arr.push(element.colNo20);
        c30Arr.push(element.colNo30);
      });
        setTslrArray(tslrArr);
        setWard(wardArr);
        setBlock(blockArr);
        setTs(tsnoArr);
        setTsExtent(tsExtentArr);
        setOld(oldArr);
        setC10(c10Arr);
        setC20(c20Arr);
        setC30(c30Arr);
        setAdd(addArr);
        setTick(tickArr);
    }
  }, []);

  const handleClick = (e) => {
    if (tslrArray.length === 0) {
      setEntry(false);
      setTslrArray((prevName) => {
        return [...prevName, "a"];
      });
      setAdd((prevName) => {
        return [...prevName, true];
      });
      setTick((prevName) => {
        return [...prevName, false];
      });
    } else {
      if (add.every((val) => val === false)) {
        setEntry(false);
        setTslrArray((prevName) => {
          return [...prevName, "a"];
        });
        setAdd((prevName) => {
          return [...prevName, true];
        });
        setTick((prevName) => {
          return [...prevName, false];
        });
      } else {
        setEntry(true);
      }
    }
  };
  const handleAdd = (e, index) => {
    setEntry(false);
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
    setEntry(false);
    setWard(ward.filter((x, i) => i !== index));
    setBlock(block.filter((x, i) => i !== index));
    setTs(ts.filter((x, i) => i !== index));
    setTsExtent(tsExtent.filter((x, i) => i !== index));
    setOld(old.filter((x, i) => i !== index));
    setC10(c10.filter((x, i) => i !== index));
    setC20(c20.filter((x, i) => i !== index));
    setC30(c30.filter((x, i) => i !== index));
    setAdd(add.filter((x, i) => i !== index));
    setTick(tick.filter((x, i) => i !== index));
    setTslrArray(tslrArray.filter((x, i) => i != index));
  };

  function updateTslr(){
    updateCase({"tslrOptions" : []});
    const newTslrOptions = [];

    tick.forEach((val,index) => {
      if(val){
        newTslrOptions.push({
          "ward" :  ward[index] ,
          "block" : block[index]  ,
          "tsno" : ts[index] ,
          "tsExtent" :  tsExtent[index] ,
          "oldSurveyNo" :  old[index],
          "colNo10" : c10[index] ,
          "colNo20" :   c20[index]  ,
          "colNo30" :   c30[index],
        })
      }
    })
    updateCase({"tslrOptions" : newTslrOptions});
  }
  ;
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
        {entry && <div className="entry">Please Save The Record </div>}
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
                      className="add-table"
                      onClick={(e) => handleAdd(e, index)}
                    >
                      +
                    </div>
                  )}
                  {tick[index] && (
                    <span class="material-symbols-outlined tick">done</span>
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
  
        </table>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={updateTslr()}>Save</div>
      </div>
    </div>
  );
};

export default Tslr;
