import "./App.css";
import Login from "./page/Login";
import Main from "page/Main";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuBar from 'component/MenuBar'

function App() {
  const [isLogin,setIsLogin] = useState(false)
  return (
    <div className="App">
      <MenuBar isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
