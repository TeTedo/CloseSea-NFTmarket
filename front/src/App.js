import "./App.css";
import Login from "./page/Login";
import Exchange from "./page/Exchange";
import Main from "page/Main";
import Swap from "page/Swap";
import SignUp from "page/SignUp";
import NFTBuy from "page/NFTBuy";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuBar from "component/MenuBar";

function App() {
	// 로그인 확인
	const [isLogin, setIsLogin] = useState(false);
	return (
		<div className="App">
			<MenuBar isLogin={isLogin} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/exchange" element={<Exchange />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/swap" element={<Swap />} />
				<Route path="/nftbuy/:id" element={<NFTBuy />} />
			</Routes>
		</div>
	);
}

export default App;
