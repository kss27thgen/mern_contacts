import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/ContactContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	const { user, isAuthenticated, logout } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<>
			<li>Hello {user && user.name}&emsp;</li>
			<li>
				<a href="#" onClick={onLogout}>
					<i className="fas fa-sign-out-alt"></i>
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li>
				<Link to="/regiser">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon}></i>&ensp;
				{title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Navbar;
