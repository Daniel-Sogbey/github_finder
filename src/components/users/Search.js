import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, users, clearUsers, setAlert }) => {
	// state = {
	// searchItem: "",
	// };

	const [searchItem, setSearchItem] = useState("");

	const onSearchItemChanged = event => {
		setSearchItem(event.target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		if (searchItem === "") {
			setAlert("Please enter a username", "light");
		} else {
			searchUsers(searchItem);
			if (users.length !== 0) {
				setSearchItem("");
			}
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input
					type="text"
					name="searchItem"
					placeholder="search users"
					value={searchItem}
					onChange={onSearchItemChanged}
				/>
				<input
					type="submit"
					value="search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{users.length > 0 &&
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear
				</button>}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
};

export default Search;
