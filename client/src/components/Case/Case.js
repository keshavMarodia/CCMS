import { useState, useEffect } from "react";
import "./Case.css";

const Case = ({ data ,updateCase }) => {
  const [caseArray, setCaseArray] = useState([]);
  const [typeArray, setTypeArray] = useState([
    "OS",
    "AS",
    "SA",
    "CCA",
    "SLP",
    "CA",
    "LGOP",
    "LGA",
    "LGC",
    "WP",
    "WA",
  ]);
  const [type, setType] = useState([]);
  const [no, setNo] = useState([]);
  const [year, setYear] = useState([]);
  const [add, setAdd] = useState([]);
  const [tick, setTick] = useState([]);
  // const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(false);
  // useEffect(() => {
  //   caseArray.length === 0 ? setShow(false) : setShow(true);
  // }, [caseArray]);

  useEffect(() => {
    if(data.otherCase.length>0){
      setEntry(false);
      const caseArr =[],addArr =[] , tickArr =[] , caseNoArr =[] , caseTypeArr =[] , caseYearArr = [];
      data.otherCase.forEach((element, index) => {
        caseArr.push("a");
        addArr.push(false);
        tickArr.push(true);
        caseNoArr.push(element.caseNo);
        caseTypeArr.push(element.caseType);
        caseYearArr.push(element.caseYear);
      });
      setCaseArray(caseArr);
      setType(caseTypeArr);
      setNo(caseNoArr);
      setYear(caseYearArr);
        setAdd(addArr);
        setTick(tickArr);
    }
  }, []);

  const handleClick = (e) => {
    if (caseArray.length === 0) {
      setEntry(false);
      setCaseArray((prevName) => {
        return [...prevName, "a"];
      });
      setType((prevName) => {
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
        setCaseArray((prevName) => {
          return [...prevName, "a"];
        });
        setType((prevName) => {
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
    setNo((prev) => {
      return [...prev, document.getElementById("no" + index).value];
    });
    setYear((prev) => {
      return [...prev, document.getElementById("year" + index).value];
    });
    setAdd(add.map((val, idx) => (idx === index ? false : val)));
    setTick(tick.map((val, idx) => (idx === index ? true : val)));
    document.getElementById("add" + index).click(false);
  };
  const handleDelete = (e, index) => {
    setEntry(false);
    setType(type.filter((x, i) => i !== index));
    setNo(no.filter((x, i) => i !== index));
    setYear(year.filter((x, i) => i !== index));
    setAdd(add.filter((x, i) => i !== index));
    setTick(tick.filter((x, i) => i !== index));
    setCaseArray(caseArray.filter((x, i) => i != index));
  };
  function updateOtherCase(){
    updateCase({"otherCase" : []});
    const newotherOptions = [];

    tick.forEach((val,index) => {
      if(val){
        newotherOptions.push({
          "caseType" :  type[index] ,
          "caseNo" : no[index]  ,
          "caseYear" : year[index],
        })
      }
    })
    updateCase({"otherCase" : newotherOptions});
  }
  ;
  // const listURL = "http://localhost:8000/api/list";
  // const data = { type, no };
  // const seel = (e) => {
  //   axios.post(listURL, data).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div className="case-parent">
      <div className="case-intro">
        <div className="case-heading">Other Court Cases(if any)</div>
        <div className="case-add" onClick={handleClick}>
          Add Case
        </div>
      </div>
      <div className="case-table">
        {entry && <div className="entry">Please Save The Record </div>}
        <table>
          <tr>
            <th>Case Type</th>
            <th>Case Number</th>
            <th>Year</th>
            <th>Add</th>
            <th>Remove</th>
          </tr>
          {caseArray.map(function (value, index) {
            return (
              <tr id={"row" + index}>
                <td>
                  <input
                    type="text"
                    value={type[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"type" + index}
                    required
                  />
                  <ul className="dropdown-menu type-scroll" role="menu">
                    {typeArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setType(
                                type.map((val, idx) =>
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
                    value={no[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"no" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={year[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"year" + index}
                  />
                </td>
                <td id={"add" + index}>
                  {add[index] && (
                    <div
                      className="add-case"
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
          {/* {type.map(function (value) {
            return <div>{value}</div>;
          })}
          {caseArray.map(function (value) {
            return <div>{value}</div>;
          })}
          {add.map(function (value) {
            return <div>fd</div>;
          })}
          {year.map(function (value) {
            return <div>{value}</div>;
          })}
          <button onClick={seel}>dfg</button> */}
        </table>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={updateOtherCase()}>Save</div>
      </div>
    </div>
  );
};

export default Case;
