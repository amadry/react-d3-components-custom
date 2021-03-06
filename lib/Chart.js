"use strict";

var React = require("react");

var Chart = React.createClass({
	displayName: "Chart",

	propTypes: {
		height: React.PropTypes.number.isRequired,
		width: React.PropTypes.number.isRequired,
		margin: React.PropTypes.shape({
			top: React.PropTypes.number,
			bottom: React.PropTypes.number,
			left: React.PropTypes.number,
			right: React.PropTypes.number
		}).isRequired
	},

	render: function render() {
		var _props = this.props;
		var width = _props.width;
		var height = _props.height;
		var margin = _props.margin;
		var children = _props.children;
		var viewBox = _props.viewBox;

		return React.createElement(
			"svg",
			{ ref: "svg", width: width, height: height, viewBox: viewBox },
			React.createElement(
				"g",
				{ transform: "translate(" + margin.left + ", " + margin.top + ")" },
				children
			)
		);
	}
});

module.exports = Chart;