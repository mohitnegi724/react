import React from 'react';
import './OpenFoodCard.css';
const OpenFoodCard = (props)=>{
	return(
		<div className="MainContainer AllCenter">
			<div className="BlurryBGDiv">
				<img alt={props.title} src={props.mainImage} className="BlurryBGImage"/>
			</div>
			<div className="CardDetailContainer">
				<img alt={props.title} className="mainRestaurantImage" src={props.mainRestaurantImage}/>
				<h3 className="CardTitle">{props.title}</h3>
			</div>
		</div>
		)
}

export default OpenFoodCard;