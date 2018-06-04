import React, { Component } from 'react';
// import { icon_dict } from '../constants'
import userLocationIcon from '../icons/005-userLocation.svg';
import weatherIcon from '../icons/001-weather.svg';
import crimeIcon from '../icons/002-crime.svg'
import otherIcon from '../icons/003-other.svg'
import constructionIcon from '../icons/004-construction.svg';
import circleIcon from '../icons/circle-stroked-11.svg';

const icon_dict = {
	user: userLocationIcon,
	weather: weatherIcon,
	construction: constructionIcon,
	crime: crimeIcon,
	other: otherIcon,
	new: circleIcon
}

class MarkerComponent extends Component {
	render() {
		const { category } = this.props;
		return (
			<div>
				<img className='marker' src={icon_dict[category] || icon_dict.new} alt={category} />
			</div>
		)
	}
}

export default MarkerComponent;