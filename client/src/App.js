import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Input from "./components/Input/Input";
import Existing from "./components/Existing/Existing";
import Report from "./components/Report/Report";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/input" element={<Input />} />
          <Route path="/existing" element={<Existing />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
