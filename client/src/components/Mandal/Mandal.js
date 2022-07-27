import { useState, useEffect } from "react";
import "./Mandal.css";

const Mandal = ({ data, updateCase }) => {
  const [mandalArray, settMandalArray] = useState([
    "TIRUMALAGIRI",
    "SHAIKPET",
    "SECUNDERABAD",
    "SAIDHABAD",
    "NAMPALLY",
    "MUSHEERABAD",
    "MAREDPALLY",
    "KHAIRATABAD",
    "HIMAYATNAGAR",
    "GOLCONDA",
    "CHARMINAR",
    "BANDLAGUDA",
    "BAHADURPURA",
    "AMEERPET",
    "ASIFNAGAR",
    "AMBERPET",
  ]);
  const [mandal, setMandal] = useState(
    data?.mandal?.mandalName ? data.mandal.mandalName : ""
  );
  const [mandalVillageArray, setMandalVillageArray] = useState([
        "AMBERPET",
        "DRAINAGE LINGAMPALLY",
        "AMBERPET SARFEKHAS",
        "MALAKPET",
        "BAGH LINGAMPALLY",
        "GAGANMAHAL",
        "DAIRA",
        "HASANALIGUDA",
        "NAMPALLY", "TOTAGUDA",
        "ASIF NAGAR",
        "MALLEPALLI",
        "GUDDIMAKLAPUR",
        "KULSUMPURA",
        "RAZDARKHANPET",
        "SAIDHABAD",
        "MADANNAPET",
        "TEEGALGUDA",
        "MOOSARAMBAGH",
        "GADDIANNARAM",
        "BAHADURPURA",
        "MEERSAGAR",
        "NANDI-MUSLAIGUDA",
        "BONDILGUDA",
        "CHARMAHAL",
        "ZEREGUMBAD",
        "BANDLAGUDA(KALSA)",
        "SULTAN BAGH",
        "NAWABSAHEBKUNTA",
        "AMJADUDDUOWLA",
        "ALI SAMUNDER",
        "KANDIKAL",
        "KANCHANBAGH",
        "LANGER HOUSE",
        "QILA MOHD.NAGAR",
        "IBRAHIAM BAGH",
        "KAIWANJA", "TALABCHANCHALAM", "MURAD MAHAL",
        "AMEERPET", "BAHLOOKHANGUDA", "SOMAJIGUDA",
        "TIRUMALAGIRI",
        "AMMUGUDA",
        "MACHABOLARAM",
        "BOWENPALLY",
        "KAKAGUDA",
        "CHANDULAL BOWLI",
        "SITARAMPUR",
        "THOKATTA",
        "MAREDPALLY (SARFEKHAS)",
        "MARREDPALLY (PAIGAH)",
        "LALAGUDA",
        "MALKAJGIRI (CANTONMENT)",
        "SHAIKPET", "HAKEEMPET", "BAKHTAWARGUDA",
        "YELLAREDDYGUDA", "KHAIRTABAD", "YOUSUFGUDA",
        "BHOLAKPUR", "RASOOLPURA",
        "MUSHEERABAD",
        "BAKARAM",
        "ZAMISTANPUR",
        "MIYAKUNTA",
  ]);
  const [village, setVillage] = useState(
    data?.mandal?.village ? data.mandal.village : ""
  );
  const [road, setRoad] = useState(data?.mandal?.road ? data.mandal.road : "");
  const [locality, setLocality] = useState(
    data?.mandal?.locality ? data.mandal.locality : ""
  );
  function updateMandal(isTrue) {
    if (isTrue) {
      const mandalvalues = {
        mandalName: mandal,
        village: village,
        road: road,
        locality: locality,
      };

      updateCase({ mandal: mandalvalues });
    }
  }
  // useEffect(() => {
  //   if (mandal == "AMBERPET") {
  //     setMandalVillageArray([
  //       "AMBERPET",
  //       "DRAINAGE LINGAMPALLY",
  //       "AMBERPET SARFEKHAS",
  //       "MALAKPET",
  //     ]);
  //   } else if (mandal == "HIMAYATNAGAR") {
  //     setMandalVillageArray([
  //       "BAGH LINGAMPALLY",
  //       "GAGANMAHAL",
  //       "DAIRA",
  //       "HASANALIGUDA",
  //     ]);
  //   } else if (mandal == "NAMPALLY") {
  //     setMandalVillageArray(["NAMPALLY", "TOTAGUDA"]);
  //   } else if (mandal == "ASIFNAGAR") {
  //     setMandalVillageArray([
  //       "ASIF NAGAR",
  //       "MALLEPALLI",
  //       "GUDDIMAKLAPUR",
  //       "KULSUMPURA",
  //       "RAZDARKHANPET",
  //     ]);
  //   } else if (mandal == "SAIDABAD") {
  //     setMandalVillageArray([
  //       "SAIDHABAD",
  //       "MADANNAPET",
  //       "TEEGALGUDA",
  //       "MOOSARAMBAGH",
  //       "GADDIANNARAM",
  //     ]);
  //   } else if (mandal == "BHADURPURA") {
  //     setMandalVillageArray([
  //       "BAHADURPURA",
  //       "MEERSAGAR",
  //       "NANDI-MUSLAIGUDA",
  //       "BONDILGUDA",
  //       "CHARMAHAL",
  //       "ZEREGUMBAD",
  //     ]);
  //   } else if (mandal == "BANDLAGUDA") {
  //     setMandalVillageArray([
  //       "BANDLAGUDA(KALSA)",
  //       "SULTAN BAGH",
  //       "NAWABSAHEBKUNTA",
  //       "AMJADUDDUOWLA",
  //       "ALI SAMUNDER",
  //       "KANDIKAL",
  //       "KANCHANBAGH",
  //     ]);
  //   } else if (mandal == "GOLCONDA") {
  //     setMandalVillageArray([
  //       "LANGER HOUSE",
  //       "QILA MOHD.NAGAR",
  //       "IBRAHIAM BAGH",
  //     ]);
  //   } else if (mandal == "CHARMINAR") {
  //     setMandalVillageArray(["KAIWANJA", "TALABCHANCHALAM", "MURAD MAHAL"]);
  //   } else if (mandal == "AMEERPET") {
  //     setMandalVillageArray(["AMEERPET", "BAHLOOKHANGUDA", "SOMAJIGUDA"]);
  //   } else if (mandal == "TIRUMALAGIRI") {
  //     setMandalVillageArray([
  //       "TIRUMALAGIRI",
  //       "AMMUGUDA",
  //       "MACHABOLARAM",
  //       "BOWENPALLY",
  //       "KAKAGUDA",
  //       "CHANDULAL BOWLI",
  //       "SITARAMPUR",
  //       "THOKATTA",
  //     ]);
  //   } else if (mandal == "MAREEDPALLY") {
  //     setMandalVillageArray([
  //       "MAREDPALLY (SARFEKHAS)",
  //       "MARREDPALLY (PAIGAH)",
  //       "LALAGUDA",
  //       "MALKAJGIRI (CANTONMENT)",
  //     ]);
  //   } else if (mandal == "SHAIKPET") {
  //     setMandalVillageArray(["SHAIKPET", "HAKEEMPET", "BAKHTAWARGUDA"]);
  //   } else if (mandal == "KHAIRATABAD") {
  //     setMandalVillageArray(["YELLAREDDYGUDA", "KHAIRTABAD", "YOUSUFGUDA"]);
  //   } else if (mandal == "SECUNDERABAD") {
  //     setMandalVillageArray(["BHOLAKPUR", "RASOOLPURA"]);
  //   } else if (mandal == "MUSHEERABAD") {
  //     setMandalVillageArray([
  //       "MUSHEERABAD",
  //       "BAKARAM",
  //       "ZAMISTANPUR",
  //       "MIYAKUNTA",
  //     ]);
  //   } else {
  //     setMandalVillageArray("SELECT A MANDAL");
  //   }
  //   console.log(mandalVillageArray);
  // }, [mandal]);
  return (
    <div className="mandal-parent">
      <div className="intro-heading">Mandal</div>
      <div className="mandal-form">
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent wstmt-accent"
            id="basic-addon1"
          >
            Mandal
          </span>
          <input
            type="text"
            value={mandal}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
            onChange={(e) => updateMandal(true)}
          />
          <ul className="dropdown-menu custom-scroll" role="menu">
            {mandalArray.map(function (value, index) {
              return (
                <li>
                  <div
                    id={index}
                    className="dropdown-item"
                    onClick={(e) => setMandal(value)}
                  >
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent wstmt-accent"
            id="basic-addon1"
          >
            Village
          </span>
          <input
            type="text"
            value={village}
            className="form-control dropdown-toggle"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
            required
          />
          <ul className="dropdown-menu custom-scroll" role="menu">
            {mandalVillageArray.map((value, index) => {
              return (
                <li>
                  <div
                    id={index}
                    className="dropdown-item"
                    onClick={(e) => setVillage(value)}
                  >
                    {value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Road
          </span>
          <input
            type="text"
            value={road}
            onChange={(e) => setRoad(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <div className="input-group mb-3 mandal-input">
          <span
            className="input-group-text accent main-accent"
            id="basic-addon1"
          >
            Locality
          </span>
          <input
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="form-control"
            aria-describedby="basic-addon1"
            required
          />
        </div>
      </div>
      <div className="specific-button-container">
        <div className="specific-button" onClick={() => updateMandal(true)}>
          Save
        </div>
      </div>
    </div>
  );
};

export default Mandal;
