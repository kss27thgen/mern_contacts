import React from "react";
import loader from "../../images/loader.gif";

export default function Spinner() {
	return (
		<img
			src={loader}
			alt="loading..."
			style={{ width: "100%", margin: "auto", display: "block" }}
		/>
	);
}
