import React from "react";
import "./App.scss";
import FrontPage from "./components/frontpage/FrontPage";
import TopBar from "./components/topbar/TopBar";

function App() {
	return (
		<div className="App">
			<TopBar />
			<header className="App-header">
				<FrontPage />
			</header>
		</div>
	);
}

export default App;
