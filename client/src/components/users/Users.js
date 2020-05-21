import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
	state = {
		users: [
			{
				id: 1,
				login: "mojbo",
				avatar_url: "blabla",
				html_url: "https://github.com/mojombo",
			},
			{
				id: 2,
				login: "mojasdfdsafsfonbo",
				avatar_url: "blabdfsala",
				html_url: "https://github.com/mojombo",
			},
			{
				id: 3,
				login: "mojsfsfonbo",
				avatar_url: "blabla",
				html_url: "https://github.com/mojombo",
			},
		],
	};

	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: "1rem",
};

export default Users;
