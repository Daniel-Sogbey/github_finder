import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	// state = {
	// id: "id",
	// login: "mojombo",
	// avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
	// html_url: "https://github.com/mojombo",
	// };

	async componentDidMount() {
		// console.log(123);

		this.setState({
			loading: true,
		});

		const res = await axios.get("https://api.github.com/users");
		console.log(res.data);

		this.setState({ users: [...res.data], loading: false });
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users users={this.state.users} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
