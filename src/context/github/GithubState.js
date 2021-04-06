import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
	SEARCH_USERS,
	GET_USER,
	GET_REPOS,
	SET_LOADING,
	CLEAR_USERS,
} from "../types";

const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	//search users

	const searchUsers = async searchItem => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${searchItem}&client_id=${process
				.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
				.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
		console.log(res.data);

		// if (res.data.items.length === 0) {
		// setAlert({
		// alert: `No user with the name "${searchItem}" found.`,
		// });
		// }

		// console.log(this.state.notFound);
		// console.log(users);
		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	//get user

	//get repos

	//clear users

	//set loading

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
