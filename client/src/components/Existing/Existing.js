import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sub from "../Sub/Sub";
import "./Existing.css";

const Existing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sample = ["1", "1", "1"];
  const [subShow, setSubShow] = useState(true);
  const [data, setData] = useState(
    location.state?.length > 0 ? location.state[0] : {}
  );

  function handleEdit() {
    const params = {
      court: data.court,
      caseType: data.caseType,
      caseNo: data.caseNo,
      caseYear: data.caseYear,
    };

    navigate("/input", {
      state: params,
    });
  }

  return (
    <div>
      <Navbar />
      <div className="exist-parent">
        <div className="specific-button-container">
          <div className="specific-button" onClick={() => handleEdit()}>
            Edit
          </div>
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
                <div className="static">{data.caseType}</div>
              </td>
              <td>
                <div className="static">{data.caseNo}</div>
              </td>
              <td>
                <div className="static">{data.caseYear}</div>
              </td>
              <td>
                <div className="static">{data.filedBy}</div>
              </td>
              <td>
                <div className="static">{data.landCase ? "YES" : "NO"}</div>
              </td>
              <td>
                <div className="static">{data.impCase ? "YES" : "NO"}</div>
              </td>
              <td>
                <div className="static">{data.icourt}</div>
              </td>
              <td>
                <div className="static">{data.judgeDesig}</div>
              </td>
              <td>
                <div className="static">{data.courtHall}</div>
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
                  <div className="static">
                    { data?.wstmtOptions && data?.wstmtOptions.length >0 && data?.wstmtOptions[0]
                      ? data?.wstmtOptions[0].wscf
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Pending At</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.pendingAt?.length > 0
                      ? data?.wstmtOptions[0]?.pendingAt
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Notice Recieved Date</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.noticeDate?.length > 0
                      ? data?.wstmtOptions[0]?.noticeDate
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Reason For Pending</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.reasonforPend?.length > 0
                      ? data?.wstmtOptions[0]?.reasonforPend
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Specify Other</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.specifyOthers?.length > 0
                      ? data?.wstmtOptions[0]?.specifyOthers
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Counter Affidavit Filed Date</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.coAffidavit?.length > 0
                      ? data?.wstmtOptions[0]?.coAffidavit
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Department Name</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.wstmtOptions[0]?.deptName?.length > 0
                      ? data?.wstmtOptions[0]?.deptName
                      : ""}
                  </div>
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
                  <div className="static">
                    {data?.mandal?.mandalName ? data.mandal.mandalName : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Village</td>
                <td className="exist-right">
                  <div className="static">
                    {data?.mandal?.village ? data.mandal.village : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Road</td>
                <td className="exist-right">
                  <div className="static">
                    {data?.mandal?.road ? data.mandal.road : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Locality</td>
                <td className="exist-right">
                  <div className="static">
                    {data?.mandal?.locality ? data.mandal.locality : ""}
                  </div>
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
                <td className="exist-right file-no">
                  <div className="static first-file">
                    {data?.fileNo?.MROfileNo &&
                    data?.fileNo?.MROfileNo.length > 0
                      ? data?.fileNo?.MROfileNo
                      : ["", "", ""]}
                  </div>
                  /<div className="static second-file">value</div>/
                  <div className="static third-file">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">DRO File No.</td>
                <td className="exist-right file-no ">
                  <div className="static first-file">
                    {data?.fileNo?.DROfileNo &&
                    data?.fileNo?.DROfileNo.length > 0
                      ? data?.fileNo?.DROfileNo
                      : ["", "", ""]}
                  </div>
                  /<div className="static second-file">value</div>/
                  <div className="static third-file">value</div>
                </td>
              </tr>
              <tr>
                <td className="exist-right">Collectorate File No.</td>
                <td className="exist-right file-no ">
                  <div className="static first-file">
                    {data?.fileNo?.collectorateFileNo &&
                    data?.fileNo?.collectorateFileNo.length > 0
                      ? data?.fileNo?.collectorateFileNo
                      : ["", "", ""]}
                  </div>
                  /<div className="static second-file">value</div>/
                  <div className="static third-file">value</div>
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
                      <div className="static">
                        {data.petitioners[index] || ""}
                      </div>
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
                      <div className="static">
                        {data.respondents[index] || ""}
                      </div>
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
                  <div className="static">
                    {data?.landStatus?.length > 0
                      ? data.landStatus[0].status
                      : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Value</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.landStatus?.length > 0
                      ? data.landStatus[0].value
                      : ""}
                  </div>
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
                  <div className="static">
                    {data?.otherDept[0]?.deptInterest ? "Yes" : "No"}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Department</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.otherDept?.length > 0 ? data.otherDept[0].dept : ""}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="exist-left">Category Of Land</td>
                <td className="exist-left">
                  <div className="static">
                    {data?.otherDept?.length > 0
                      ? data.otherDept[0].category
                      : ""}
                  </div>
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
                    value={data.relief || ""}
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
                    value={data.property || ""}
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
                  <div className="static">{data?.extent || ""}</div>
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
                  <div className="static">{data?.govtPleader || ""}</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="exist-table">
          <div className="output-table">
            <table>
              <tr className="exist-left">
                <th colSpan={9} className="exist-left">
                  Tslr
                </th>
              </tr>
              <tr>
                <th colSpan={1}>S No.</th>
                <th colSpan={1}>Ward</th>
                <th colSpan={1}>Block</th>
                <th colSpan={1}>TS No.</th>
                <th colSpan={1}>TS extent.</th>
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
                      <div className="static">
                        {data?.tslrOptions[index]?.ward.length > 0
                          ? data?.tslrOptions[index]?.ward
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.block.length > 0
                          ? data?.tslrOptions[index]?.block
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.tsno.length > 0
                          ? data?.tslrOptions[index]?.tsno
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.tsExtent.length > 0
                          ? data?.tslrOptions[index]?.tsExtent
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.oldSurveyNo.length > 0
                          ? data?.tslrOptions[index]?.oldSurveyNo
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.colNo10.length > 0
                          ? data?.tslrOptions[index]?.colNo10
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.colNo20.length > 0
                          ? data?.tslrOptions[index]?.colNo20
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.tslrOptions[index]?.colNo30.length > 0
                          ? data?.tslrOptions[index]?.colNo30
                          : ""}
                      </div>
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
                      <div className="static">
                        {data?.otherCase[index]?.caseType.length > 0
                          ? data?.otherCase[index]?.caseType
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.otherCase[index]?.caseNo.length > 0
                          ? data?.otherCase[index]?.caseNo
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.otherCase[index]?.caseYear.length > 0
                          ? data?.otherCase[index]?.caseYear
                          : ""}
                      </div>
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
                      <div className="static">
                        {data?.pahani[index]?.sethwar.length > 0
                          ? data?.pahani[index]?.sethwar
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.pahaniYear.length > 0
                          ? data?.pahani[index]?.pahaniYear
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.surveyNo1.length > 0
                          ? data?.pahani[index]?.surveyNo1
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.village.length > 0
                          ? data?.pahani[index]?.village
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.extentA.length > 0
                          ? data?.pahani[index]?.extentA
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.extentGuntas.length > 0
                          ? data?.pahani[index]?.extentGuntas
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.pattedarName.length > 0
                          ? data?.pahani[index]?.pattedarName
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.pahani[index]?.enjoyerName.length > 0
                          ? data?.pahani[index]?.enjoyerName
                          : ""}
                      </div>
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
                      <div className="static">
                        {data?.postDetails[index]?.postDate.length > 0
                          ? data?.postDetails[index]?.postDate
                          : ""}
                      </div>
                    </td>
                    <td>
                      <div className="static">
                        {data?.postDetails[index]?.postReason.length > 0
                          ? data?.postDetails[index]?.postReason
                          : ""}
                      </div>
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
