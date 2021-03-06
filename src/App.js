import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/Pages/About";
import axios from "axios";

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: {},
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

	//Make HTTP request to GITHUB API

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
				alert: `No user with the name "${searchItem}" found.`,
			});
		}

		console.log(this.state.notFound);
		console.log(this.state.users);
		this.setState({ users: [...res.data.items], loading: false });
	};

	//Clear users from state

	clearUsersHandler = () => {
		this.setState({
			users: [],
			loading: false,
		});
	};

	// Set Alert

	setAlertHandler = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 5000);
	};

	render() {
		const { loading, users, alert } = this.state;
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={props =>
									<Fragment>
										<Search
											searchUsers={this.searchUsersHandler}
											clearUsers={this.clearUsersHandler}
											users={users}
											setAlert={this.setAlertHandler}
										/>
										<Users users={users} loading={loading} />
									</Fragment>}
							/>
							<Route exact path="/about" component={About} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
