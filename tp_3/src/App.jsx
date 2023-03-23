import { useDispatch, useSelector } from "react-redux";
import List from "./components/list";
import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Homepage from "./components/homepage";
import Loginpage from "./components/loginpage";

function App() {
	const users = useSelector((state) => state.listUsers);
	
	return (
		<div className="App">
			<Nav />
			<hr />
			<Routes>
				<Route path="/login" element={<Loginpage/>}/>
				<Route path="/" element={<Homepage />} />
				<Route path="/list" element={<List info={users} />} />
			</Routes>
		</div>
	);
}

export default App;
