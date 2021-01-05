import React from 'react';

import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = (props) => {
	return (
		<MainHeader>
			<button className='main-navigation__menu-btn'>
				<span />
				<span />
				<span />
			</button>
		</MainHeader>
	);
};

export default MainNavigation;
