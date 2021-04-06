import React, { useState, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Alert from "./components/layouts/Alert";
import About from "./components/Pages/About";
import axios from "axios";

import GithubState from "./context/github/GithubState";

const App = () => {
	// state = {
	// users: [],
	// user: {},
	// repos: [],
	// loading: false,
	// alert: {},
	// };

	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState({});

	// async componentDidMount() {
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
	// }

	//Make HTTP request to GITHUB API

	// Get single Github user

	const getUser = async username => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setUser(res.data);
		setLoading(false);
	};

	// Get user repos

	const getUserRepos = async username => {
		setLoading(true);

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process
				.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setRepos(res.data);
		setLoading(false);
	};

	//Clear users from state

	const clearUsersHandler = () => {
		setUsers([]);
		setLoading(false);
	};

	// Set Alert

	const setAlertHandler = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};

	return (
		<GithubState>
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
											clearUsers={clearUsersHandler}
											users={users}
											setAlert={setAlertHandler}
										/>
										<Users users={users} loading={loading} />
									</Fragment>}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:login"
								render={props =>
									<User
										{...props}
										getUser={getUser}
										user={user}
										loading={loading}
										getUserRepos={getUserRepos}
										repos={repos}
									/>}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</GithubState>
	);
};
export default App;
