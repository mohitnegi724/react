import React from 'react';
import './Foodcard.css';

const Foodcard = (props)=>{
	return(
			<div className="FoodcardBody">
				<img className="resImage" src={props.imageSource} alt={props.resName}/>
				<div className="NameAndRating">
					<p className="resName">{props.resName}</p>
					<div className="RatingDiv">
					<img className="ratingStar" src={props.rating} alt="ratingStar"/>
					<p className="resRating">{props.resRating}</p>
					</div>
				</div>
				<p className="resLocation">{props.resLocation}</p>
			</div>
		)
}

export default Foodcard;