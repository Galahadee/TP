import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Homepage from "./components/homepage";
import List from "./components/list";

function App() {
	return (
		<div className="App">
			<Nav />
			<hr />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</div>
	);
}

export default App;
