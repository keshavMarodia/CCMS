import { useState, useEffect } from "react";
import "./Pahani.css";

const Pahani = ({ data ,updateCase }) => {
  const [pahArray, setPahArray] = useState([]);
  const [pahaniArray, setPahaniArray] = useState([
    "KHASRA PAHANI",
    "SESALA PAHANI",
    "PAHANI",
    "SETHWAR",
  ]);
  const [pahani, setPahani] = useState([]);
  const [pahYear, setPahYear] = useState([]);
  const [sno1, setSno1] = useState([]);
  const [sno2, setSno2] = useState([]);
  const [sno3, setSno3] = useState([]);
  const [pahVillage, setPahVillage] = useState([]);
  const [ac, setAc] = useState([]);
  const [guntas, setGuntas] = useState([]);
  const [pattedar, setPattedar] = useState([]);
  const [enjoyer, setEnjoyer] = useState([]);
  const [add, setAdd] = useState([]);
  const [tick, setTick] = useState([]);
  // const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(false);
  // useEffect(() => {
  //   pahArray.length === 0 ? setShow(false) : setShow(true);
  // }, [pahArray]);

  useEffect(() => {
    if(data.pahani.length>0){
      setEntry(false);
      const pahaniArr =[] , addArr =[] , tickArr =[] , sethwarArr =[]  , yearArr =[] , survey1Arr =[] , survey2Arr =[] ,survey3Arr =[] ,villageArr =[] , extentArr =[] , guntasArr =[] , pattedarArr =[] , enjoyerArr = [];
      data.pahani.forEach((element, index) => {
        pahaniArr.push("a");
        addArr.push(false);
        tickArr.push(true);
        sethwarArr.push(element.sethwar);
        yearArr.push(element.pahaniYear);
        survey1Arr.push(element.surveyNo1);
        survey2Arr.push(element.surveyNo2);
        survey3Arr.push(element.surveyNo3);
        villageArr.push(element.village);
        extentArr.push(element.extentA);
        guntasArr.push(element.extentGuntas);
        pattedarArr.push(element.pattedarName);
        enjoyerArr.push(element.enjoyerName);
      });
      setPahArray(pahaniArr);
      setPahani(sethwarArr);
        setPahYear(yearArr);
        setSno1(survey1Arr);
        setSno2(survey2Arr);
        setSno3(survey3Arr);
        setPahVillage(villageArr);
        setAc(extentArr);
        setGuntas(guntasArr);
        setPattedar(pattedarArr);
        setEnjoyer(enjoyerArr);
        setAdd(addArr);
        setTick(tickArr);
    }
  }, []);

  const handleClick = (e) => {
    if (pahArray.length === 0) {
      setEntry(false);
      setPahArray((prevName) => {
        return [...prevName, "a"];
      });
      setPahani((prevName) => {
        return [...prevName, ""];
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
        setPahArray((prevName) => {
          return [...prevName, "a"];
        });
        setPahani((prevName) => {
          return [...prevName, ""];
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
    setPahYear((prev) => {
      return [...prev, document.getElementById("pahYear" + index).value];
    });
    setSno1((prev) => {
      return [...prev, document.getElementById("sno1" + index).value];
    });
    setSno2((prev) => {
      return [...prev, document.getElementById("sno2" + index).value];
    });
    setSno3((prev) => {
      return [...prev, document.getElementById("sno3" + index).value];
    });
    setPahVillage((prev) => {
      return [...prev, document.getElementById("pahVillage" + index).value];
    });
    setAc((prev) => {
      return [...prev, document.getElementById("ac" + index).value];
    });
    setGuntas((prev) => {
      return [...prev, document.getElementById("guntas" + index).value];
    });
    setPattedar((prev) => {
      return [...prev, document.getElementById("pattedar" + index).value];
    });
    setEnjoyer((prev) => {
      return [...prev, document.getElementById("enjoyer" + index).value];
    });
    setAdd(add.map((val, idx) => (idx === index ? false : val)));
    setTick(tick.map((val, idx) => (idx === index ? true : val)));
    document.getElementById("add" + index).click(false);
  };
  const handleDelete = (e, index) => {
    setEntry(false);
    setPahani(pahani.filter((x, i) => i !== index));
    setPahYear(pahYear.filter((x, i) => i !== index));
    setSno1(sno1.filter((x, i) => i !== index));
    setSno2(sno2.filter((x, i) => i !== index));
    setSno3(sno3.filter((x, i) => i !== index));
    setPahVillage(pahVillage.filter((x, i) => i !== index));
    setAc(ac.filter((x, i) => i !== index));
    setGuntas(guntas.filter((x, i) => i !== index));
    setPattedar(pattedar.filter((x, i) => i !== index));
    setEnjoyer(enjoyer.filter((x, i) => i !== index));
    setAdd(add.filter((x, i) => i !== index));
    setTick(tick.filter((x, i) => i !== index));
    setPahArray(pahArray.filter((x, i) => i != index));
  };

  function updatePahani(isSave){
    if(isSave){
    updateCase({"pahani" : []});
    const newpahaniOptions = [];

    tick.forEach((val,index) => {
      if(val){
        newpahaniOptions.push({
          "sethwar" :  pahani[index] ,
          "pahaniYear" : pahYear[index]  ,
          "surveyNo1" : sno1[index] ,
          "surveyNo2" :  sno2[index] ,
          "surveyNo3" :  sno3[index],
          "village" : pahVillage[index],
          "extentA" :   ac[index]  ,
          "extentGuntas" :   guntas[index],
          "pattedarName" :   pattedar[index],
          "enjoyerName" :   enjoyer[index],
        })
      }
    })
    updateCase({"pahani" : newpahaniOptions});
    } 
  }
  ;

  return (
    <div className="pah-parent">
      <div className="pah-intro">
        <div className="pah-heading">Pahani</div>
        <div className="pah-add" onClick={handleClick}>
          Add
        </div>
      </div>
      <div className="pah-table">
        {entry && <div className="entry">Please Save The Record </div>}
        <table>
          <tr>
            <th rowSpan={2}>Pahani/Sethwar</th>
            <th rowSpan={2}>Pahani Year</th>
            <th colSpan={3} rowSpan={2}>
              Survey No.
            </th>
            <th rowSpan={2}>Village</th>
            <th colSpan={2}>Extent</th>
            <th rowSpan={2}>Pattedar Name</th>
            <th rowSpan={2}>Enjoyer Name</th>
            <th rowSpan={2}>Add</th>
            <th rowSpan={2}>Remove</th>
          </tr>
          <tr>
            <td>AC</td>
            <td>GUNTAS</td>
          </tr>
          {pahArray.map(function (value, index) {
            return (
              <tr id={"row" + index}>
                <td className="pah-list">
                  <input
                    type="text"
                    value={pahani[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"pahani" + index}
                    required
                  />
                  <ul className="dropdown-menu pah-scroll" role="menu">
                    {pahaniArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setPahani(
                                pahani.map((val, idx) =>
                                  idx === index ? v : val
                                )
                              );
                            }}
                          >
                            {v}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td>
                  <input
                    type="text"
                    value={pahYear[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"pahYear" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={sno1[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"sno1" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={sno2[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"sno2" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={sno3[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"sno3" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={pahVillage[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"pahVillage" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={ac[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"ac" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={guntas[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"guntas" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={pattedar[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"pattedar" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={enjoyer[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"enjoyer" + index}
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
          {/* {pahani.map(function (value) {
            return <div>{value}</div>;
          })}
          {pahYear.map(function (value) {
            return <div>{value}</div>;
          })}
          {sno1.map(function (value) {
            return <div>{value}</div>;
          })}
          {sno2.map(function (value) {
            return <div>{value}</div>;
          })}
          {sno3.map(function (value) {
            return <div>{value}</div>;
          })}
          {pahVillage.map(function (value) {
            return <div>{value}</div>;
          })}
          {ac.map(function (value) {
            return <div>{value}</div>;
          })}
          {guntas.map(function (value) {
            return <div>{value}</div>;
          })}
          {pattedar.map(function (value) {
            return <div>{value}</div>;
          })}
          <button onClick={seel}>dfg</button> */}
        </table>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={() => updatePahani(true)}>Save</div>
      </div>
    </div>
  );
};

export default Pahani;
