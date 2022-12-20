import "./App.css";
import Login from "./page/Login";
import Exchange from "./page/Exchange";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </div>
  );
}

export default App;
