import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";

class App extends Component {
	// state = {
	// id: "id",
	// login: "mojombo",
	// avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
	// html_url: "https://github.com/mojombo",
	// };

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
