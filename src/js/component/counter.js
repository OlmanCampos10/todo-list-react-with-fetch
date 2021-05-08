import React from "react";
import PropTypes from "prop-types";

//create your first component
export const Counter = props => {
	return <small className="text-left">{props.items} Elemento</small>;
};

Counter.propTypes = {
	items: PropTypes.number
};
