import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
	state = {
		searchItem: "",
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
	};

	onSearchItemChanged = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.searchUsers(this.state.searchItem);
		this.setState({ searchItem: "" });
	};

	render() {
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
			</div>
		);
	}
}

export default Search;
