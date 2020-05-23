import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import AlertContext from "../../context/alert/alertContext";

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const { addContact, current, clearCurrent, updateContact } = contactContext;

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal",
	});
	const { name, email, phone, type } = contact;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: "",
				email: "",
				phone: "",
				type: "personal",
			});
		}
	}, [current, contactContext]);

	const onChange = (e) =>
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === "" || email === "") {
			return setAlert("Please enter name and email", "danger");
		}

		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearCurrent();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className="text-primary">
				{current ? "Edit Contact" : "Add Contact"}
			</h2>
			<input
				type="text"
				placeholder="name"
				name="name"
				value={name}
				autoComplete="off"
				onChange={onChange}
			/>
			<input
				type="email"
				placeholder="email"
				name="email"
				value={email}
				autoComplete="none"
				onChange={onChange}
			/>
			<input
				type="text"
				placeholder="phone"
				name="phone"
				value={phone}
				autoComplete="none"
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="personal"
				onChange={onChange}
				checked={type === "personal"}
			/>
			&ensp;Personal&emsp;
			<input
				type="radio"
				name="type"
				value="professional"
				onChange={onChange}
				checked={type === "professional"}
			/>
			&ensp;Professional&emsp;
			<div>
				<input
					type="submit"
					value={current ? "Update Contact" : "Add Contact"}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button
						className="btn btn-light btn-block"
						onClick={clearAll}
					>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
