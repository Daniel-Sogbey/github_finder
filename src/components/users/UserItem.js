import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				className="round-img"
				alt="user avatar"
				style={{ width: "60px" }}
			/>
			<h1>
				{login}
			</h1>
			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};

// UserItem.defaultProps = {
//
// }

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
