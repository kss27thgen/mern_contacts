import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const { filterd, filterContacts, clearFilter } = contactContext;
	const text = useRef("");

	useEffect(() => {
		if (filterd === null) {
			text.current.value = "";
		}
	}, []);

	const onChange = (e) => {
		if (text.current.value !== "") {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				type="text"
				placeholder="Filter Contacts..."
				onChange={onChange}
				ref={text}
			/>
		</form>
	);
};

export default ContactFilter;
