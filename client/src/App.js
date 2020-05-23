import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layouts/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

class App extends Component {
	render() {
		return (
			<AuthState>
				<ContactState>
					<AlertState>
						<BrowserRouter>
							<>
								<Navbar
									icon="fas fa-id-card-alt"
									title="Connectin"
								/>
								<div className="container my-2">
									<Alerts />
									<Switch>
										<PrivateRoute
											exact
											path="/"
											component={Home}
										/>
										<Route
											path="/about"
											component={About}
										/>
										<Route
											path="/regiser"
											component={Register}
										/>
										<Route
											path="/login"
											component={Login}
										/>
									</Switch>
								</div>
							</>
						</BrowserRouter>
					</AlertState>
				</ContactState>
			</AuthState>
		);
	}
}

export default App;
