import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
	static defaultProps = {
		title: "Unko",
		icon: "fa fa-times",
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div className="navbar bg-primary">
				<h1>
					<i className={this.props.icon}></i>&ensp;
					{this.props.title}
				</h1>
			</div>
		);
	}
}

export default Navbar;
