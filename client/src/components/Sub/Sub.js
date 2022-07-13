import { useState, useEffect } from "react";
import axios from "axios";
import "./Sub.css";
const Sub = () => {
  const [subArray, setSubArray] = useState([]);
  const [subFileArray, setSubFileArray] = useState([
    "COLLECTOR",
    "RDO",
    "MRO",
    "PVT PARTY",
  ]);
  const [subPetArray, setSubPetArray] = useState([
    "COLLECTOR",
    "RDO",
    "MRO",
    "GP",
  ]);
  const [subCase1Array, setSubCase1Array] = useState([
    "WPMP",
    "OS",
    "OP",
    "LGOP",
    "WP AS FRESH CASE",
    "WVMP",
    "EA",
    "EP",
    "AS",
    "CCCA",
    "SA",
    "SASR",
    "WA",
    "SLP",
    "CIVIL APPEAL",
    "REVIEW PETITION IN SLP",
    "CURATIVE PETITION",
    "REVEIEW WPMP IN WP",
    "WASR",
    "WPSR",
    "IA",
    "WAMP",
    "CC",
    "RESTORATION",
  ]);
  var subCase3Array = [];
  for (var i = 2022; i >= 1958; i--) {
    subCase3Array.push(i);
  }
  const [statusDropArray, setStatusDropArray] = useState([
    "PENDING",
    "DISPOSED IN FAVOR OF GOVT",
    "DISPOSED AGAINAST GOVT",
  ]);
  //   const handleSubmit = (e) => {
  //     const data = { court, caseType, caseNo, caseYear };
  //     navigate("/input", {
  //       state: data,
  //     });
  //   };
  const [subCase1, setSubCase1] = useState([]);
  const [subCase2, setSubCase2] = useState([]);
  const [subCase3, setSubCase3] = useState([]);
  const [subCaseDate, setSubCaseDate] = useState([]);
  const [subCaseFile, setSubCaseFile] = useState([]);
  const [statusDrop, setStatusDrop] = useState([]);
  const [statusDate, setStatusDate] = useState([]);
  const [statusGist, setStatusGist] = useState([]);
  const [statusFile, setStatusFile] = useState([]);
  const [statusCe, setStatusCe] = useState([]);
  const [subFile, setSubFile] = useState([]);
  const [subPet, setSubPet] = useState([]);
  const [subRes, setSubRes] = useState([]);
  const [subPrayer, setSubPrayer] = useState([]);
  const [subLand, setSubLand] = useState([]);
  const [subDate, setSubDate] = useState([]);
  const [add, setAdd] = useState([]);
  const [tick, setTick] = useState([]);
  // const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(false);
  // useEffect(() => {
  //   postArray.length === 0 ? setShow(false) : setShow(true);
  // }, [postArray]);
  const handleClick = (e) => {
    if (subArray.length === 0) {
      setEntry(false);
      setSubArray((prevName) => {
        return [...prevName, "a"];
      });
      setSubFile((prevName) => {
        return [...prevName, ""];
      });
      setSubCase1((prevName) => {
        return [...prevName, ""];
      });
      setSubCase3((prevName) => {
        return [...prevName, ""];
      });
      setStatusDrop((prevName) => {
        return [...prevName, ""];
      });
      setSubPet((prevName) => {
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
        setSubArray((prevName) => {
          return [...prevName, "a"];
        });
        setSubFile((prevName) => {
          return [...prevName, ""];
        });
        setSubCase1((prevName) => {
          return [...prevName, ""];
        });
        setSubCase3((prevName) => {
          return [...prevName, ""];
        });
        setStatusDrop((prevName) => {
          return [...prevName, ""];
        });
        setSubPet((prevName) => {
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
    setSubCase2((prev) => {
      return [...prev, document.getElementById("subCase2" + index).value];
    });
    setSubCaseDate((prev) => {
      return [...prev, document.getElementById("subCaseDate" + index).value];
    });
    setSubCaseFile((prev) => {
      return [...prev, document.getElementById("subCaseFile" + index).value];
    });
    setSubRes((prev) => {
      return [...prev, document.getElementById("subRes" + index).value];
    });
    setSubPrayer((prev) => {
      return [...prev, document.getElementById("subPrayer" + index).value];
    });
    setSubLand((prev) => {
      return [...prev, document.getElementById("subLand" + index).value];
    });
    setSubDate((prev) => {
      return [...prev, document.getElementById("subDate" + index).value];
    });
    setStatusDate((prev) => {
      return [...prev, document.getElementById("statusDate" + index).value];
    });
    setStatusGist((prev) => {
      return [...prev, document.getElementById("statusGist" + index).value];
    });
    setStatusFile((prev) => {
      return [...prev, document.getElementById("statusFile" + index).value];
    });
    setStatusCe((prev) => {
      return [...prev, document.getElementById("statusCe" + index).value];
    });
    setAdd(add.map((val, idx) => (idx === index ? false : val)));
    setTick(tick.map((val, idx) => (idx === index ? true : val)));
    document.getElementById("add" + index).click(false);
  };
  const handleDelete = (e, index) => {
    setEntry(false);
    setSubFile(subFile.filter((x, i) => i !== index));
    setSubCase1(subCase1.filter((x, i) => i !== index));
    setSubCase2(subCase2.filter((x, i) => i !== index));
    setSubCase3(subCase3.filter((x, i) => i !== index));
    setSubCaseDate(subCaseDate.filter((x, i) => i !== index));
    setSubCaseFile(subCaseFile.filter((x, i) => i !== index));
    setSubPet(subPet.filter((x, i) => i !== index));
    setSubRes(subRes.filter((x, i) => i !== index));
    setSubPrayer(subPrayer.filter((x, i) => i !== index));
    setSubLand(subLand.filter((x, i) => i !== index));
    setSubDate(subDate.filter((x, i) => i !== index));
    setStatusDrop(statusDrop.filter((x, i) => i !== index));
    setStatusDate(statusDate.filter((x, i) => i !== index));
    setStatusGist(statusGist.filter((x, i) => i !== index));
    setStatusFile(statusFile.filter((x, i) => i !== index));
    setStatusCe(statusCe.filter((x, i) => i !== index));
    setAdd(add.filter((x, i) => i !== index));
    setTick(tick.filter((x, i) => i !== index));
    setSubArray(subArray.filter((x, i) => i != index));
  };
  // const listURL = "http://localhost:8000/api/list";
  // const data = { type, no };
  // const seel = (e) => {
  //   axios.post(listURL, data).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div className="sub-parent">
      <div className="sub-add" onClick={handleClick}>
        Add Sub-Case
      </div>
      <div className="sub-table">
        {entry && <div className="entry">Please Save The Record </div>}
        {subArray.map(function (value, index) {
          return (
            <table>
              <tr>
                <th>Filed BY</th>
                <th colSpan={3}>Case No</th>
                <th>Petitioner</th>
                <th>Respondent</th>
                <th>Prayer</th>
                <th>Status Of Land</th>
                <th>Next Hearing Date</th>
                <th colSpan={2}>Status</th>
                <th>Add</th>
                <th>Remove</th>
              </tr>
              <tr id={"row1" + index}>
                <td rowSpan={6} className="sub-list">
                  <input
                    type="text"
                    value={subFile[index]}
                    className="form-control form-control-sm dropdown-toggle sub-file"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"subFile" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {subFileArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setSubFile(
                                subFile.map((val, idx) =>
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
                <td className="sub-list" rowSpan={2}>
                  <input
                    type="text"
                    value={subCase1[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"subCase1" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {subCase1Array.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setSubCase1(
                                subCase1.map((val, idx) =>
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
                <td rowSpan={2}>
                  <input
                    type="text"
                    value={subCase2[index]}
                    className="form-control form-control-sm sub-case-2"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"subCase2" + index}
                  />
                </td>
                <td className="sub-list" rowSpan={2}>
                  <input
                    type="text"
                    value={subCase3[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"subCase1" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {subCase3Array.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setSubCase3(
                                subCase3.map((val, idx) =>
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
                <td rowSpan={6} className="sub-list">
                  <input
                    type="text"
                    value={subPet[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"subPet" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {subPetArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setSubPet(
                                subPet.map((val, idx) =>
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
                <td rowSpan={6}>
                  <input
                    type="text"
                    value={subRes[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"subRes" + index}
                  />
                </td>
                <td rowSpan={6}>
                  <input
                    type="text"
                    value={subPrayer[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"subPrayer" + index}
                  />
                </td>
                <td rowSpan={6}>
                  <input
                    type="text"
                    value={subLand[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"subLand" + index}
                  />
                </td>
                <td rowSpan={6}>
                  <input
                    type="date"
                    value={subDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"subDate" + index}
                  />
                </td>
                <td>Status</td>
                <td>Order Date</td>
                <td id={"add" + index} rowSpan={6} className="add-button">
                  {add[index] && (
                    <div
                      className="add-sub"
                      onClick={(e) => handleAdd(e, index)}
                    >
                      +
                    </div>
                  )}
                  {tick[index] && (
                    <span class="material-symbols-outlined">done</span>
                  )}
                </td>
                <td rowSpan={6} className="remove-button">
                  <div
                    className="remove"
                    onClick={(e) => handleDelete(e, index)}
                  >
                    -
                  </div>
                </td>
              </tr>
              <tr id={"row2" + index}>
                <td>
                  <input
                    type="text"
                    value={statusDrop[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"statusDrop" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {statusDropArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setStatusDrop(
                                statusDrop.map((val, idx) =>
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
                    type="date"
                    value={statusDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"statusDate" + index}
                  />
                </td>
              </tr>
              <tr id={"row3" + index}>
                <td colSpan={3}>Sub-Case Date</td>
                <td>Gist Of Order</td>
                <td>CE Date</td>
              </tr>
              <tr id={"row4" + index}>
                <td colSpan={3}>
                  <input
                    type="date"
                    value={subCaseDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"subCaseDate" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={statusGist[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"statusGist" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={statusCe[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"statusCe" + index}
                  />
                </td>
              </tr>
              <tr id={"row5" + index}>
                <td colSpan={3}>Upload Affadavit</td>
                <td colSpan={2}>Upload Judgement</td>
              </tr>
              <tr id={"row6" + index}>
                <td colSpan={3}>
                  {" "}
                  <input
                    type="file"
                    // value={subCaseFile}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"subCaseFile" + index}
                  />
                </td>
                <td colSpan={2}>
                  <input
                    type="file"
                    // value={statusFile}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"statusFile" + index}
                  />
                </td>
              </tr>
            </table>
          );
        })}
        {/* {subArray.map(function (value, index) {
            return (
              <tr id={"row2" + index}>
                <td>
                  <input
                    type="text"
                    value={statusDrop[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"statusDrop" + index}
                    required
                  />
                  <ul className="dropdown-menu sub-scroll" role="menu">
                    {statusDropArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setStatusDrop(
                                statusDrop.map((val, idx) =>
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
                    type="date"
                    value={statusDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"statusDate" + index}
                  />
                </td>
              </tr>
            );
          })} */}
        {/* {subArray.map(function (value, index) {
            return (
              <tr id={"row3" + index}>
                <td colSpan={3}>Sub-Case Date</td>
                <td>Gist Of Order</td>
                <td>CE Date</td>
              </tr>
            );
          })} */}
        {/* {subArray.map(function (value, index) {
            return (
              <tr id={"row4" + index}>
                <td colSpan={3}>
                  <input
                    type="date"
                    value={subCaseDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"subCaseDate" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={statusGist[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"statusGist" + index}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={statusCe[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    autoComplete="off"
                    id={"statusCe" + index}
                  />
                </td>
              </tr>
            );
          })} */}
        {/* {subArray.map(function (value, index) {
            return (
              <tr id={"row5" + index}>
                <td colSpan={3}>Upload Affadavit</td>
                <td colSpan={2}>Upload Judgement</td>
              </tr>
            );
          })} */}
        {/* {subArray.map(function (value, index) {
            return (
              <tr id={"row6" + index}>
                <td colSpan={3}>
                  {" "}
                  <input
                    type="file"
                    // value={subCaseFile}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"subCaseFile" + index}
                  />
                </td>
                <td colSpan={2}>
                  <input
                    type="file"
                    // value={statusFile}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"statusFile" + index}
                  />
                </td>
              </tr>
            );
          })} */}
        {/* {type.map(function (value) {
            return <div>{value}</div>;
          })}
          {caseArray.map(function (value) {
            return <div>{value}</div>;
          })}
          {year.map(function (value) {
            return <div>{value}</div>;
          })}
          <button onClick={seel}>dfg</button> */}
      </div>
      <div className="specific-button-container">
        <div className="specific-button">Save</div>
      </div>
    </div>
  );
};

export default Sub;
