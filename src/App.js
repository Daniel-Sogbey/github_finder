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
		notFound: "",
	};

	async componentDidMount() {
		// console.log(123);
		// console.log();
		//
		// this.setState({
		// loading: true,
		// });
		//
		// const res = await axios.get(
		// `https://api.github.com/users?client_id=${process.env
		// .REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
		// .REACT_APP_GITHUB_CLIENT_SECRET}`
		// );
		// console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
		// console.log(res.data);
		//
		// this.setState({ users: [...res.data], loading: false });
	}

	searchUsersHandler = async searchItem => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/search/users?q=${searchItem}&client_id=${process
				.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
		console.log(res.data);

		if (res.data.items.length === 0) {
			this.setState({
				notFound: `No user with the name "${searchItem}" found.`,
			});
		}

		console.log(this.state.notFound);
		console.log(this.state.users);
		this.setState({ users: [...res.data.items], loading: false });
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Search searchUsers={this.searchUsersHandler} />
					{this.state.users.length === 0
						? <p
								style={{
									margin: "auto",
									textAlign: "center",
									fontSize: "30px",
								}}>
								{this.state.notFound}
							</p>
						: null}
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
