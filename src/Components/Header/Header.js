import React from 'react';
import './header.css';
const Header=(props)=>{
	return(
		<div className="Header">
			<div id="logo">
				<p>Uttarakhand ~ The Heaven</p>
			</div>
			<div className="MenuOptions">
				<ul>
					<li onClick={props.Home}>Home</li>
					<li onClick={props.Food}>Food</li>
					<li onClick={props.Stay}>Stay</li>
					<li onClick={props.Travel}>Travel</li>
					<li onClick={props.Stories}>Stories</li>
					<li onClick={props.Music}>Music</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;