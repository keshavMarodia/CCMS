import { useState, useEffect } from "react";
import "./Posting.css";
const Posting = ({ data , updateCase }) => {

  const [postArray, setPostArray] = useState([]);
  const [reasonArray, setReasonArray] = useState([
    "No Admission",
    "For Instructions",
    "For Counter Affidavit",
    "For Submission of Report",
    "For Filing of Affidavit",
    "For Hearing",
    "For Filing of Advocate Submission Report",
    "For Appearance",
    "For Final Hearing",
    "Reserved for Judgment",
    "For Dismissal",
    "For Production of Records",
    "Others",
  ]);

  const [pDate, setPDate] = useState([]);
  const [pReason, setPReason] = useState([]);
  const [add, setAdd] = useState([]);
  const [tick, setTick] = useState([]);
  // const [show, setShow] = useState(false);
  const [entry, setEntry] = useState(false);

    useEffect(() => {
      if(data.postDetails.length >0 ){
      setEntry(false);
      const postArr =[],addArr =[] , tickArr =[] , dateArr =[] , reasonArr =[];
      data.postDetails.forEach((element, index) => {
        postArr.push("a");
        addArr.push(false);
        tickArr.push(true);
        const datesetter = new Date(element.postDate).toISOString().split('T')[0];
        dateArr.push(datesetter);
        reasonArr.push(element.postReason);
      });
      setPostArray(postArr);
      setPDate(dateArr);
      setPReason(reasonArr);
        setAdd(addArr);
        setTick(tickArr);
    }
  }, []);
  
  const handleClick = (e) => {
    if (postArray.length === 0) {
      setEntry(false);
      setPostArray((prevName) => {
        return [...prevName, "a"];
      });
      setPReason((prevName) => {
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
        setPostArray((prevName) => {
          return [...prevName, "a"];
        });
        setPReason((prevName) => {
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
    setPDate((prev) => {
      return [...prev, document.getElementById("date" + index).value];
    });
    setAdd(add.map((val, idx) => (idx === index ? false : val)));
    setTick(tick.map((val, idx) => (idx === index ? true : val)));
    document.getElementById("add" + index).click(false);
  };

  const handleDelete = (e, index) => {
    setEntry(false);
    setPDate(pDate.filter((x, i) => i !== index));
    setPReason(pReason.filter((x, i) => i !== index));
    setAdd(add.filter((x, i) => i !== index));
    setTick(tick.filter((x, i) => i !== index));
    setPostArray(postArray.filter((x, i) => i != index));
  };
  function updatePosting(){
    updateCase({"postDetails" : []});
    const newpostOptions = [];

    tick.forEach((val,index) => {
      if(val){
        newpostOptions.push({
          "postDate" :  pDate[index] ,
          "postReason" : pReason[index]  ,
        })
      }
    })
    updateCase({"postDetails" : newpostOptions});
};
  // const listURL = "http://localhost:8000/api/list";
  // const data = { type, no };
  // const seel = (e) => {
  //   axios.post(listURL, data).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div className="post-parent">
      <div className="post-intro">
        <div className="post-heading">Posting Details</div>
        <div className="post-add" onClick={handleClick}>
          Add
        </div>
      </div>
      <div className="post-table">
        {entry && <div className="entry">Please Save The Record </div>}
        <table>
          <tr>
            <th>Posting Date</th>
            <th>Posting Reason</th>
            <th>Add</th>
            <th>Remove</th>
          </tr>
          {postArray.map(function (value, index) {
            return (
              <tr id={"row" + index}>
                <td>
                  <input
                    type="date"
                    value={pDate[index]}
                    className="form-control form-control-sm"
                    aria-describedby="basic-addon1"
                    required
                    id={"date" + index}
                  />
                </td>
                <td className="post-list">
                  <input
                    type="text"
                    value={pReason[index]}
                    className="form-control form-control-sm dropdown-toggle"
                    aria-describedby="basic-addon1"
                    data-bs-toggle="dropdown"
                    id={"reason" + index}
                    required
                  />
                  <ul className="dropdown-menu post-scroll" role="menu">
                    {reasonArray.map(function (v, i) {
                      return (
                        <li>
                          <div
                            className="dropdown-item"
                            onClick={(e) => {
                              setPReason(
                                pReason.map((val, idx) =>
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
        </table>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={updatePosting()}>
          Save
        </div>
      </div>
    </div>
  );
};

export default Posting;
