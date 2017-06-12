import React from "react";
import Create from "./Create.js";

// very basic component to get started
var Main = React.createClass({
	render: function() {
		return (
	      // We can only render a single div. So we need to group everything inside of this main-container one
			<div className="main-container">
				<div className="container">
					<div className="jumbotron">
						<h2 className="text-center"><strong>(ReactJS) Quote Saver</strong></h2>
						<h3 className="text-center">Create a quote and save, heart or delete it!</h3>
					</div>

					<Create />

					<footer>
						<hr />
						<p className="pull-right">
						<i className="fa fa-github" aria-hidden="true"></i>
						Proudly built using React.js
						</p>
					</footer>
				</div>
			</div>
		);
	}
})

export default Main;
