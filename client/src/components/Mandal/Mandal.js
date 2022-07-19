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
  const [villageArray, setVillageArray] = useState(["SELECT A MANDAL"]);
  const [mandal, setMandal] = useState(
    data?.mandal?.mandalName ? data.mandal.mandalName : ""
  );
  const [village, setVillage] = useState(
    data?.mandal?.village ? data.mandal.village : ""
  );
  const [road, setRoad] = useState(
    data?.mandal?.road ? data.mandal.road : ""
  );
  const [locality, setLocality] = useState(
    data?.mandal?.locality ? data.mandal.locality : ""
  );
  // useEffect(() => {
  //   if (mandal == "AMBERPET") {
  //     setVillageArray([
  //       "AMBERPET",
  //       "DRAINAGE LINGAMPALLY",
  //       "AMBERPET SARFEKHAS",
  //       "MALAKPET",
  //     ]);
  //   } else if (mandal == "HIMAYATNAGAR") {
  //     setVillageArray([
  //       "BAGH LINGAMPALLY",
  //       "GAGANMAHAL",
  //       "DAIRA",
  //       "HASANALIGUDA",
  //     ]);
  //   } else if (mandal == "NAMPALLY") {
  //     setVillageArray(["NAMPALLY", "TOTAGUDA"]);
  //   } else if (mandal == "ASIFNAGAR") {
  //     setVillageArray([
  //       "ASIF NAGAR",
  //       "MALLEPALLI",
  //       "GUDDIMAKLAPUR",
  //       "KULSUMPURA",
  //       "RAZDARKHANPET",
  //     ]);
  //   } else if (mandal == "SAIDABAD") {
  //     setVillageArray([
  //       "SAIDHABAD",
  //       "MADANNAPET",
  //       "TEEGALGUDA",
  //       "MOOSARAMBAGH",
  //       "GADDIANNARAM",
  //     ]);
  //   } else if (mandal == "BHADURPURA") {
  //     setVillageArray([
  //       "Bahadurpura",
  //       "Meersagar",
  //       "Nandi-Muslaiguda",
  //       "Bondilguda",
  //       "Charmahal",
  //       "Zeregumbad",
  //     ]);
  //   } else if (mandal == "BANDLAGUDA") {
  //     setVillageArray([
  //       "BANDLAGUDA(KALSA)",
  //       "SULTAN BAGH",
  //       "NAWABSAHEBKUNTA",
  //       "AMJADUDDUOWLA",
  //       "ALI SAMUNDER",
  //       "KANDIKAL",
  //       "KANCHANBAGH",
  //     ]);
  //   } else if (mandal == "GOLCONDA") {
  //     setVillageArray(["LANGER HOUSE", "QILA MOHD.NAGAR", "IBRAHIAM BAGH"]);
  //   } else if (mandal == "CHARMINAR") {
  //     setVillageArray(["KAIWANJA", "TALABCHANCHALAM", "MURAD MAHAL"]);
  //   } else if (mandal == "AMEERPET") {
  //     setVillageArray(["AMEERPET", "BAHLOOKHANGUDA", "SOMAJIGUDA"]);
  //   } else if (mandal == "TIRUMALAGIRI") {
  //     setVillageArray([
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
  //     setVillageArray([
  //       "MAREDPALLY (SARFEKHAS)",
  //       "MARREDPALLY (PAIGAH)",
  //       "LALAGUDA",
  //       "MALKAJGIRI (CANTONMENT)",
  //     ]);
  //   } else if (mandal == "SHAIKPET") {
  //     setVillageArray(["SHAIKPET", "HAKEEMPET", "BAKHTAWARGUDA"]);
  //   } else if (mandal == "KHAIRATABAD") {
  //     setVillageArray(["YELLAREDDYGUDA", "KHAIRTABAD", "YOUSUFGUDA"]);
  //   } else if (mandal == "SECUNDERABAD") {
  //     setVillageArray(["BHOLAKPUR", "RASOOLPURA"]);
  //   } else if (mandal == "MUSHEERABAD") {
  //     setVillageArray(["MUSHEERABAD", "BAKARAM", "ZAMISTANPUR", "MIYAKUNTA"]);
  //   } else {
  //     setVillageArray("SELECT A MANDAL");
  //   }
  // }, [mandal]);
  function updateMandal(isTrue) {
    if(isTrue){
    const mandalvalues = {
      "mandalName": mandal,
      "village": village,
      "road": road,
      "locality": locality,
    };

    updateCase({ "mandal" : mandalvalues });
  }
  }
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
            {villageArray.map(function (value, index) {
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
