import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	async componentDidMount() {
		// console.log(123);

		this.setState({
			loading: true,
		});

		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
		console.log(res.data);

		this.setState({ users: [...res.data], loading: false });
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search />
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
