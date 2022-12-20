import "./App.css";
import Login from "./page/Login";
import Exchange from "./page/Exchange";
import Main from "page/Main";
import Swap from "page/Swap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default App;
