import {
	SEARCH_USERS,
	GET_USER,
	GET_REPOS,
	SET_LOADING,
	CLEAR_USERS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
