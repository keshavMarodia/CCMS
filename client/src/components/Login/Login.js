import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const [fill, setFill] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const listURL = "http://localhost:8000/api/list";
  const userURL = "http://localhost:8000/api/user";
  useEffect(() => {
    axios.get(listURL).then(function (response) {
      if (response.status == "200") {
        setList(response.data);
      } else {
        setError(true);
      }
    });
  }, []);
  const handleLogin = (e) => {
    const data = { username, password };
    e.preventDefault();
    if (username == "" || password == "") {
      setFill(true);
    } else {
      setFill(false);
      axios.post(userURL, data).then((response) => {
        const status = response.data.status;
        if (status == "primaryError" || status == "secondaryError") {
          setError(true);
          setEmpty(false);
          setIncorrect(false);
        } else if (status == "emptyPassword") {
          setError(false);
          setEmpty(true);
          setIncorrect(false);
        } else if (status == "incorrect") {
          setError(false);
          setEmpty(false);
          setIncorrect(true);
        } else if (status == "match") {
          localStorage.setItem("username", username);
          navigate("/home");
        } else {
          console.log("Unknown response");
        }
      });
    }
  };
  const handleSign = (e) => {
    const data = { username, password };
    e.preventDefault();
    if (username == "" || password == "") {
      setFill(true);
    } else {
      axios.post(listURL, data).then((response) => {
        setFill(false);
        console.log(response);
        if (response.data.status == "UpdateSuccess") {
          localStorage.setItem("username", username);
          navigate("/home");
        } else {
          setError(true);
        }
      });
    }
  };
  return (
    <div className="login-parent">
      <div className="login-child">
        <div className="img-contianer">
          <img
            src="https://i.postimg.cc/JhQ1MgJp/tel.jpg"
            alt="logo"
            className="logo"
          />
        </div>
        <div>
          <form className="form-parent">
            <div className="input-group mb-3">
              <span className="input-group-text accent" id="basic-addon1">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <input
                type="text"
                value={username}
                className="form-control dropdown-toggle"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                data-bs-toggle="dropdown"
              />
              <ul className="dropdown-menu scrollable-menu" role="menu">
                {list.map(function (value) {
                  return (
                    <li>
                      <div
                        id={value._id}
                        className="dropdown-item"
                        onClick={(e) => setUsername(value.username)}
                      >
                        {value.username}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text accent" id="basic-addon1">
                <span className="material-symbols-outlined">lock</span>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="button-container">
              <button
                className="login-container"
                name="action"
                value="login"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="signup-container"
                name="action"
                value="submit"
                onClick={handleSign}
              >
                Sign-Up
              </button>
            </div>
          </form>
        </div>
        {fill && <div className="warning">Please fill the entries</div>}
        {error && <div className="warning">Error Occured</div>}
        {empty && <div className="warning">Please Sign-up</div>}
        {incorrect && (
          <div className="incorrect">
            Incorrect Password, You can change the password by signing up again
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
