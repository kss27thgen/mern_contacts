import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar title="Github finder" icon="fab fa-github" />
				<div className="container">
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
