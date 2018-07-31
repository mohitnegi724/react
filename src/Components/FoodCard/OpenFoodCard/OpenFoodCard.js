import React from 'react';
import './OpenFoodCard.css';
const OpenFoodCard = (props)=>{
	return(
		<div className="MainContainer">
			<div className="BlurryBGDiv">
				<img alt={props.title} src={props.mainImage} className="BlurryBGImage"/>
			</div>
			<div className="CardDetailContainer">
				<img alt={props.title} className="mainRestaurantImage" src={props.mainRestaurantImage}/>
				<div className="TitleFormat">
					<img src={props.RestaurantType} alt={props.title} className="RestaurantType"/>
					<h3 className="CardTitle">{props.title}</h3>
				</div>
				<p className="CardTitleRestaurantAddress">{props.RestaurantAddress}</p>
				<div className="RestaurantSocialMedia">
					<a href={props.RestaurantFacebook} target="_blank"><img src="https://goo.gl/zMmnZJ" alt="Facebook"/></a>
					<a href={props.RestaurantInstagram} target="_blank"><img src="https://goo.gl/DCRW9u" alt="Instagram"/></a>
					<a href={props.RestaurantWeb} target="_blank"><img src="https://goo.gl/rUdcCn" alt="Website"/></a>
					<p className="RestaurantContact">{props.RestaurantContact}</p>
				</div>
				<div className="MustTryDishes">
					<h4 className="RestaurantMustTryTitle">Must Try</h4>
					<p className="RestaurantMustTry">{props.RestaurantMustTry}</p>
				</div>
				<div className="RestaurantServices">
					<div className="RestaurantService">
						<p className="ServiceName">Dine In</p>
						<p className="ServiceCheck">{props.RestaurantDineService}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Air Conditioned</p>
						<p className="ServiceCheck">{props.RestaurantAC}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Bar</p>
						<p className="ServiceCheck">{props.RestaurantBar}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Outdoor Area</p>
						<p className="ServiceCheck">{props.RestaurantOutdoorArea}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Online Booking</p>
						<p className="ServiceCheck">{props.RestaurantBooking}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Smoking</p>
						<p className="ServiceCheck">{props.RestaurantSmoking}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Food Type</p>
						<p className="ServiceCheck">{props.RestaurantVegNonVeg}</p>
					</div>
					<div className="RestaurantService">
						<p className="ServiceName">Desserts</p>
						<p className="ServiceCheck">{props.RestaurantDessert}</p>
					</div>
				</div>
				<div className="CardDetails">
					<div className="detailSection">
						<img src={props.MealPriceImage} alt="Meal Price"/>
						<p>{props.MealPrice}</p>
					</div>
					<div className="detailSection">
						<img src={props.timingImage} alt="Meal Price"/>
						<p>{props.RestaurantTimings}</p>
					</div>
					<div className="detailSection mapSection">
						<img src="https://png.icons8.com/color/50/000000/google-maps.png" alt="Map"/>
						<p>Map</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default OpenFoodCard;