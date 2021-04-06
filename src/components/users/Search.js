import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ users, clearUsers, setAlert }) => {
	const githubContext = useContext(GithubContext);

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
			githubContext.searchUsers(searchItem);
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
	clearUsers: PropTypes.func.isRequired,
	users: PropTypes.array.isRequired,
};

export default Search;
