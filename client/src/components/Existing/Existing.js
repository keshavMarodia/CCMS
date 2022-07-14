import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sub from "../Sub/Sub";
import "./Existing.css";
const Existing = () => {
  const sample = ["1", "1", "1"];
  const [subShow, setSubShow] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="exist-parent">
        <div className="specific-button-container">
          <div className="specific-button">Edit</div>
        </div>
        <div className="exist-table">
          <table>
            <tr>
              <th colSpan={3}>Case Details</th>
              <th colSpan={1}>Filed By</th>
              <th colSpan={1}>Land Case</th>
              <th colSpan={1}>Imp. Case</th>
              <th colSpan={1}>Court</th>
              <th colSpan={1}>Judge Designation</th>
              <th colSpan={1}>Court Hall</th>
            </tr>
            <tr>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
              <td>
                <div className="static">value</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="exist-table">
          <div className="left-table">
            <table className="exist-left">
              <tr className="exist-left">
                <th colSpan={2} className="exist-left">
                  Written Stmt.
                </th>
              </tr>
              <tr>
                <td className="exist-left">Counter Filed</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Pending At</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Notice Recieved Date</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Reason For Pending</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Specify Other</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Counter Affidavit Filed Date</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Department Name</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
          <div className="right-table">
            <table className="exist-right">
              <tr className="exist-right">
                <th colSpan={2} className="exist-left">
                  Mandal
                </th>
              </tr>
              <tr>
                <td className="exist-right">Mandal</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Village</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Road</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Locality</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
          <div className="right-table">
            <table className="exist-right">
              <tr className="exist-right">
                <th colSpan={2} className="exist-left">
                  File Number
                </th>
              </tr>
              <tr>
                <td className="exist-right">MRO File No.</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">DRO File No.</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Collectorate File No.</td>
                <td className="exist-right">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="exist-table">
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th colspan={2} className="exist-left">
                  Petitioner(s)
                </th>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td className="exist-left">{index + 1}</td>
                    <td className="exist-left">
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th colspan={2} className="exist-left">
                  Respondent(s)
                </th>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td className="exist-left">{index + 1}</td>
                    <td className="exist-left">
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left" colSpan={2}>
                  Land Status
                </th>
              </tr>
              <tr>
                <td className="exist-left">Status</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Value</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Value As On Date</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left" colSpan={2}>
                  Other Govt Department
                </th>
              </tr>
              <tr>
                <td className="exist-left">Other Govt. Dept. Interested</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Department</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Category Of Land</td>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="exist-table">
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left">Relief</th>
              </tr>
              <tr>
                <td className="exist-left">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={"insert"}
                    disabled
                    rows="4"
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left">Property</th>
              </tr>
              <tr>
                <td className="exist-left">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={"insert"}
                    disabled
                    rows="4"
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left">Extent Of Land In Sq. Yards</th>
              </tr>
              <tr>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
          <div className="exist-divide">
            <table className="exist-left">
              <tr className="exist-left">
                <th className="exist-left">Government Pleader</th>
              </tr>
              <tr>
                <td className="exist-left">
                  <div className="static">value</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="exist-table">
          <div className="output-table">
            <table>
              <tr className="exist-left">
                <th colSpan={8} className="exist-left">
                  Tslr
                </th>
              </tr>
              <tr>
                <th colSpan={1}>S No.</th>
                <th colSpan={1}>Ward</th>
                <th colSpan={1}>Block</th>
                <th colSpan={1}>TS No.</th>
                <th colSpan={1}>Old Survey No.</th>
                <th colSpan={1}>Col No. 10</th>
                <th colSpan={1}>Col No. 20</th>
                <th colSpan={1}>Col No. 30</th>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="output-table">
            <table>
              <tr className="exist-left">
                <th colSpan={4} className="exist-left">
                  Other Court Cases
                </th>
              </tr>
              <tr>
                <th colSpan={1}>S No.</th>
                <th colSpan={1}>Case Type</th>
                <th colSpan={1}>Case Number</th>
                <th colSpan={1}>Year</th>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className="exist-table">
          <div className="output-table">
            <table>
              <tr className="exist-left">
                <th colSpan={9} className="exist-left">
                  Pahani
                </th>
              </tr>
              <tr>
                <th colSpan={1} rowSpan={2}>
                  S No.
                </th>
                <th colSpan={1} rowSpan={2}>
                  Pahani
                </th>
                <th colSpan={1} rowSpan={2}>
                  Pahani Year
                </th>
                <th colSpan={1} rowSpan={2}>
                  Survey No.
                </th>
                <th colSpan={1} rowSpan={2}>
                  Village
                </th>
                <th colSpan={2} rowSpan={1}>
                  Extent
                </th>
                <th colSpan={1} rowSpan={2}>
                  Pattedar Name
                </th>
                <th colSpan={1} rowSpan={2}>
                  Enjoyer Name
                </th>
              </tr>
              <tr>
                <td colSpan={1}>AC</td>
                <td colSpan={1}>GUNTAS</td>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="output-posting">
            <table>
              <tr className="exist-left">
                <th colSpan={3} className="exist-left">
                  Posting Details
                </th>
              </tr>
              <tr>
                <th colSpan={1}>S No.</th>
                <th colSpan={1}>Posting Date</th>
                <th colSpan={1}>Posting Reason</th>
              </tr>
              {sample.map(function (value, index) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className="exist-table">
          <table className="exist-left">
            <tr className="exist-left">
              <th colSpan={2} className="exist-left">
                Main Case Status
              </th>
            </tr>
            <tr>
              <td className="exist-left">Main Case Status</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Pending</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Interim Order Date</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Interim Orders In Force/Expire</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Interim Type</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Interim Order Copy</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Caveat Petition Filed</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">
                Appeal/Fresh Case Filed By Other Party
              </td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Remarks(if any)</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Against Govt.</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
            <tr>
              <td className="exist-left">Dismissed</td>
              <td className="exist-left">
                <div className="static">value</div>
              </td>
            </tr>
          </table>
        </div>
        {subShow && (
          <div className="special-table">
            {sample.map(function (value, index) {
              return (
                <table>
                  <tr className="exist-left">
                    <th colSpan={10} className="exist-left">
                      Sub-Case(s)
                    </th>
                  </tr>
                  <tr>
                    <th colSpan={1}>S No.</th>
                    <th colSpan={1}>Filed By</th>
                    <th colSpan={3}>Case No.</th>
                    <th colSpan={1}>Petitioner</th>
                    <th colSpan={1}>Respondent</th>
                    <th colSpan={1}>Prayer</th>
                    <th colSpan={1}>Status Of Land</th>
                    <th colSpan={1}>Next Hearing Date</th>
                  </tr>
                  <tr>
                    <td rowSpan={7}>{index + 1}</td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td>
                      <div className="static">value</div>
                    </td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                    <td rowSpan={5}>
                      <div className="static">value</div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Sub-Case Date</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="static">value</div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Affadavit</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="static">value</div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Status</td>
                    <td colSpan={2}>Order date</td>
                    <td colSpan={2}>Gist Of Order</td>
                    <td colSpan={2}>Judgement</td>
                    <td colSpan={1}>CE Date</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="static">value</div>
                    </td>
                    <td colSpan={2}>
                      <div className="static">value</div>
                    </td>
                    <td colSpan={2}>
                      <div className="static">value</div>
                    </td>
                    <td colSpan={2}>
                      <div className="static">value</div>
                    </td>
                    <td colSpan={1}>
                      <div className="static">value</div>
                    </td>
                  </tr>
                </table>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Existing;
