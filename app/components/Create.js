var React = require("react");

var Create = React.createClass({
	render: function() {
		return(
			<div className="main-container">
				<div className="form-group">
				  <label className="control-label" for="inputQuote">Enter your quote here</label>
				  <input type="text" className="form-control" id="inputQuote" placeholder="Life is a beautiful struggle" />
				</div>
			</div>
		);
	}
})


module.exports = Create;


