import React from 'react';
import './Foodcard.css';

const Foodcard = (props)=>{
	return(
			<div className="FoodcardBody">
				<img className="resImage" src={props.imageSource} alt={props.resName}/>
				<div className="NameAndRating">
					<p className="resName">{props.resName}</p>
					<p className="resRating">{props.resRating}</p>
				</div>
				<p className="resLocation">{props.resLocation}</p>
			</div>
		)
}

export default Foodcard;