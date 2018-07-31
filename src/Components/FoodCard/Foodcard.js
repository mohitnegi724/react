import React from 'react';
import './Foodcard.css';

const Foodcard = (props)=>{
	return(
			<div className="FoodcardBody" onClick={props.showOpenFoodCard}>
				<img className="resImage" src={props.imageSource} alt={props.resName}/>
				<div className="NameAndRating">
					<p className="resName">{props.resName}</p>
					<div className="RatingDiv">
					<img className="ratingStar" src={props.rating} alt="ratingStar"/>
					<p className="resRating">{props.resRating}</p>
					</div>
				</div>
				<div className="Bottom">
				<img src={props.resType} alt="type" className="resType"/>
				<p className="resLocation">{props.resLocation}</p>
				<p className="MealPrice">{props.MealPrice}</p>
				</div>
			</div>
		)
}

export default Foodcard;