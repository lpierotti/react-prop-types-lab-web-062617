// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		return <div>
			<p>{this.props.name}</p>
			<p>{this.props.producer}</p>
			<p>{this.props.hasWatermark}</p>
			<p>{this.props.color}</p>
			<p>{this.props.weight}</p>
		</div>
	}
}

Product.defaultProps = {
	hasWatermark: false,
}

function correctRange(props, propName, componentName) {

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value < 300 && value > 80) ? null : new Error(propName + ' in ' + componentName + " is not in range");
    } else {
    	return new Error(propName + ' in ' + componentName + " is not a number");
    }
  } else {
  	return new Error(propName + ' in ' + componentName + " is required")
  }

  // assume all ok
  return null;
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: correctRange
}


export default Product;