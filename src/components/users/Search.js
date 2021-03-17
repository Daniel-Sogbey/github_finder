import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
	state = {
		searchItem: "",
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		users: PropTypes.array.isRequired,
	};

	onSearchItemChanged = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = event => {
		event.preventDefault();
		if (this.state.searchItem === "") {
			this.props.setAlert("Please enter a username", "light");
		} else {
			this.props.searchUsers(this.state.searchItem);
			if (this.props.users.length !== 0) {
				this.setState({ searchItem: "" });
			}
		}
	};

	render() {
		const { users, clearUsers } = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="searchItem"
						placeholder="search users"
						value={this.state.searchItem}
						onChange={this.onSearchItemChanged}
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
	}
}

export default Search;
