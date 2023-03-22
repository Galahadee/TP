import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Homepage from "./components/homepage";
import List from "./components/list";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Nav></Nav>
			<hr />
			<Routes>
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</div>
	);
}

export default App;
