import React from 'react';
import './OpenFoodCard.css';
const OpenFoodCard = (props)=>{
	return(
		<div className="AllCenter">
			<div className="BlurryBGDiv">
				<img src={props.mainImage} className="BlurryBGImage"/>
			</div>
			<img className="mainRestaurantImage" src={props.mainRestaurantImage}/>
			<h3>{props.title}</h3>
		</div>
		)
}

export default OpenFoodCard;