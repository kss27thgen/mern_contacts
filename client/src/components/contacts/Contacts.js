import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../layouts/Spinner";

const Contacts = () => {
	const contactContext = useContext(ContactContext);
	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please add a contact</h4>;
	}

	return (
		<>
			{contacts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map((contact) => (
								<CSSTransition
									key={contact._id}
									classNames="item"
									timeout={500}
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))
						: contacts.map((contact) => (
								<CSSTransition
									key={contact._id}
									classNames="item"
									timeout={500}
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Contacts;
