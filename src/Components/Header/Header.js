import React from 'react';
import './header.css';
const Header=(props)=>{
	return(
		<div className="Header">
			<div className="HeaderBody">
				<div id="logo">
					<img src="https://png.icons8.com/color/1600/alps.png" alt="Logo"/>
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
		</div>
	)
}

export default Header;