import React, { Fragment, Component } from "react";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
	};

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			company,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;

		const { loading } = this.props;

		if (loading) {
			return <Spinner />;
		}

		return (
			<Fragment>
				<Link to="/" className="btn btn-light">
					Back To Search
				</Link>
				Hireable:{hireable
					? <i className="fas fa-check text-success" />
					: <i className="fas fa-check text-success" />}
				<div className="card grid-2">
					<div className="all-center">
						<img
							src={avatar_url}
							className="round-img"
							style={{ width: "150px" }}
							alt=""
						/>
						<h1>
							{name}
						</h1>
						<p>
							Location: {location}
						</p>
					</div>
					<div>
						{bio &&
							<Fragment>
								<h1>Bio</h1>
								<p>
									{bio}
								</p>
							</Fragment>}
						<a href={html_url} className="btn btn-dark my-1">
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login &&
									<Fragment>
										<strong>Username: </strong> {login}
									</Fragment>}
							</li>
							<li>
								{company &&
									<Fragment>
										<strong>Company: </strong> {company}
									</Fragment>}
							</li>
							<li>
								{blog &&
									<Fragment>
										<strong>Blog: </strong> {blog}
									</Fragment>}
							</li>
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default User;
