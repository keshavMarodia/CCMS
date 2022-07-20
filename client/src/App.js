import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Input from "./components/Input/Input";
import Existing from "./components/Existing/Existing";
import Report from "./components/Report/Report";
import { useState } from "react";
import Protected from "./components/Protected/Protected";

function App() {
  const [auth,setAuth]=useState(null);
  function handleAuth(newValue) {
    setAuth(newValue);
  }
  console.log(auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login auth={auth} handleAuth={handleAuth} />} />         
          <Route path="/home" element={<Protected isLoggedIn={auth}><Home /></Protected>} />
          <Route path="/main" element={<Protected isLoggedIn={auth}><Main /></Protected>} />
          <Route path="/input" element={<Protected isLoggedIn={auth}><Input /></Protected>} />
          <Route path="/existing" element={<Protected isLoggedIn={auth}><Existing/></Protected>} />
          <Route path="/report" element={<Protected isLoggedIn={auth}><Report /></Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
