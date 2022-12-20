import "./App.css";
import Login from "./page/Login";
import Main from "page/Main";
import Swap from "page/Swap";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* path="/Login" 변경전 */}
        {/* 테스트스테스테스테스테스ㅡ */}
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
}

export default App;
