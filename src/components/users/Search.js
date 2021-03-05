import React, { Component } from "react";

class Search extends Component {
	state = {
		searchItem: "",
	};

	onSearchItemChanged = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});

		console.log(this.state.searchItem);
	};

	onSubmit = event => {
		event.preventDefault();
		console.log(this.state.searchItem);
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
