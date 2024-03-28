import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./pages/Main.tsx";
import "./App.css";

function App() {
	useEffect(() => {
		axios
			.get(
				`${process.env.REACT_APP_BASE_URL}/F-C0032-001?Authorization=${process.env.REACT_APP_WEATHER_Autorization}`
			)
			.then((res) => {
				console.log(res.data);
			});
	}, []);
	return (
		<div className="flex justify-center items-center h-full bg-slate-300">
			<Main></Main>
		</div>
	);
}

export default App;
