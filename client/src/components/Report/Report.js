import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Report.css";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let report = location.state.report;
  var params;
  if(report === "IMPORTANT CASE"){
    params={
      impCase : true,
    }
  }

  const [reportCase, setReportCase] = useState([]);

  const handleClick = (e, index, value) => {
    navigate("/existing", {
      state: [value],
    });
  };

  useEffect(() => { 
    async function fetchData() {
      const resp = await fetch(
        "http://localhost:8000/case?" + new URLSearchParams(params).toString()
      );
      const result = await resp.json();
      console.log(result);
      if( result.length > 0){
          setReportCase(result); 
      }
    }
    fetchData();
   }, [report]);


  return (
    <div>
      <Navbar />
      <div className="report-parent">
        <div className="report-heading">{report}</div>
        <div className="exist-table">
          <table>
            <tr>
              <th colSpan={1}>Number Of Cases </th>
              <td>
                <div className="static">{reportCase.length}</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="special-table">
          <table>
            <tr className="exist-left">
              <th colSpan={10} className="exist-left">
                Cases
              </th>
            </tr>
            <tr>
              <th colSpan={1}>S No.</th>
              <th colSpan={1}>Court</th>
              <th colSpan={1}>Case Type</th>
              <th colSpan={1}>Case No.</th>
              <th colSpan={1}>Case Year</th>
              <th colSpan={1}>View</th>
            </tr>
            {reportCase.map(function (value, index) {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td colSpan={1}>
                    <div className="static">{value.court}</div>
                  </td>
                  <td colSpan={1}>
                    <div className="static">{value.caseType}</div>
                  </td>
                  <td colSpan={1}>
                    <div className="static">{value.caseNo}</div>
                  </td>
                  <td colSpan={1}>
                    <div className="static">{value.caseYear}</div>
                  </td>
                  <td
                    colSpan={1}
                    className="view"
                    onClick={(e) => handleClick(e, index, value)}
                  >
                    <span class="material-symbols-outlined">visibility</span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
