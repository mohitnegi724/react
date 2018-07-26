import React from 'react';
import './Staycard.css';

const Staycard=(props)=>{
	return(
		<div className="StaycardBody">
			< img className = "stayImage"/>
			<div className="NameAndRating">
				<p className="stayName">{props.stayName}</p>
				<p className="stayRating">{props.stayRating}</p>
			</div>
			<p className="stayName">{props.stayPrice}</p>
			<p className="stayLocation">{props.stayLocation}</p>
		</div>
	)
}

export default Staycard;