import React, { Component } from "react";
import "./App.css";

class App extends Component {
	// foo = () => "BarT";

	render() {
		const name = "John Doe";

		const foo = () => "Bar";

		const loading = false;
		const showName = true;

		// if (loading) {
		// return <h4>Loading</h4>;
		// }

		return (
			<div className="App">
				<h1>MY APP</h1>
				{loading
					? <h4>Loading</h4>
					: <p>
							Hello {showName && name.toUpperCase()}
						</p>}
			</div>
		);
	}
}

export default App;
