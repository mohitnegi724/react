import React, { Component } from 'react';
import Foodcard from './Components/FoodCard/Foodcard';
import OpenFoodCard from './Components/FoodCard/OpenFoodCard/OpenFoodCard';
import Staycard from './Components/StayCard/Staycard';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  state={
        Restaurant:[
        {RestaurantName: "Super Donuts",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res1",
          RestaurantImage:"https://goo.gl/xb6FNz"},
        {RestaurantName: "Cafe Ivy",
          RestaurantRating:4.5,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res2",
          RestaurantImage:"https://goo.gl/UU8jfg"},
        {RestaurantName: "Uncle M Hungry",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res3",
          RestaurantImage:"https://goo.gl/eJE37e"},
        {RestaurantName: "Landour Bakery",
          RestaurantRating:4.5,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res4",
          RestaurantImage:"https://goo.gl/TncSeb"},
        {RestaurantName: "The Tea Room at Alaya",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res5",
          RestaurantImage:"https://goo.gl/6rJGZf"},
        {RestaurantName: "Honey Hut",
          RestaurantRating:4.2,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res6",
          RestaurantImage:"https://goo.gl/eT8cy4"},
        {RestaurantName: "L'Opéra Dehradun",
          RestaurantRating:4.8,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res7",
          RestaurantImage:"https://goo.gl/bE4TB9"},
        {RestaurantName: "Mussoorie Lights",
          RestaurantRating:4.6,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res8",
          RestaurantImage:"https://goo.gl/NSF6q4"},
        {RestaurantName: "First Gear Cafe",
          RestaurantRating:4.2,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res9",
          RestaurantImage:"https://goo.gl/AqN57h"},
        {RestaurantName: "Bikanervala",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res10",
          RestaurantImage:"https://goo.gl/nH57y7"},
        {RestaurantName: "The Great Indian Pub",
          RestaurantRating:4.2,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res11",
          RestaurantImage:"https://goo.gl/qn1Miz"},
        {RestaurantName: "Flow Bistro",
          RestaurantRating:4.1,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res12",
          RestaurantImage:"https://goo.gl/xTdE33"}
        ],
        Stay:[
        {StayName: "JW Marriott Mussoorie Walnut Grove Resort & Spa",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay1",
          StayImage:"https://goo.gl/iUygeu"},
        {StayName: "WelcomHotel The Savoy",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay2",
          StayImage:"https://goo.gl/iTvros"},
        {StayName: "Hotel Vishnu Palace",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay3",
          StayImage:"https://goo.gl/8KBEHp"},
        {StayName: "Hotel Imperial Square",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay4",
          StayImage:"https://goo.gl/X1k6DF"},
        {StayName: "Hotel Highland",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay5",
          StayImage:"https://goo.gl/vyiEs7"},
        {StayName: "EllBee",
          StayRating:3.9,
          StayLocation:"Rishikesh",
          StayKey:"Stay6",
          StayImage:"https://goo.gl/qcKEZm"},
        {StayName: "Mosaic Hotel",
          StayRating:4.8,
          StayLocation:"Mussoorie",
          StayKey:"Stay7",
          StayImage:"https://goo.gl/CUaJDX"},
        {StayName: "Ilbert Manor",
          StayRating:4.6,
          StayLocation:"Mussoorie",
          StayKey:"Stay8",
          StayImage:"https://goo.gl/KucDbq"},
        {StayName: "Whispering Windows",
          StayRating:4.2,
          StayLocation:"Mussoorie",
          StayKey:"Stay9",
          StayImage:"https://goo.gl/xVZB8T"},
        {StayName: "Hotel Nand Residency",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay10",
          StayImage:"https://goo.gl/ZpdtqZ"},
        {StayName: "Hotel Mayur",
          StayRating:4.2,
          StayLocation:"Mussoorie",
          StayKey:"Stay11",
          StayImage:"https://goo.gl/i6Syiq"},
        {StayName: "Hotel Pavilion",
          StayRating:4.1,
          StayLocation:"Mussoorie",
          StayKey:"Stay12",
          StayImage:"https://goo.gl/rzfQkY"}
        ],
        ratingImage:"https://png.icons8.com/color/1600/star.png",
        showFood: false,
        showStay: false
  };
  showFoodHandler=()=>{
      this.setState({
        showFood:true,
        showStay:false,
      })
  }
  showStayHandler=()=>{
    this.setState({
      showStay: true,
      showFood:false
    })
  }
  render(){
    //Fetching The List Of Restaurants
    let Restaurants = this.state.Restaurant;
    //Getting And Printing Them Individually
    let ResCard = Restaurants.map((Restaurant, Index)=>{
    //Returning Foodcard Component
    return <Foodcard imageSource={Restaurant.RestaurantImage}
              rating={this.state.ratingImage}
              resName={Restaurant.RestaurantName} 
              resLocation={Restaurant.RestaurantLocation}
              resRating={Restaurant.RestaurantRating}
              key={Restaurant.RestaurantKey}/>
    });
    //Fetching The List Of Stays
    let Stays = this.state.Stay;
    //Getting And Printing Them Individually
    let StayCard =Stays.map((Stay, Index)=>{
    //Returning Foodcard Component
    return <Staycard 
              imageSource={Stay.StayImage}
              stayName={Stay.StayName} 
              stayLocation={Stay.StayLocation}
              stayRating={Stay.StayRating}
              key={Stay.StayKey}/>
    });
    return (
      <div>
        < Header Food = {this.showFoodHandler} Stay={this.showStayHandler}/>
        {
          this.state.showFood===true?<div>
          <div className="Container">{ResCard}</div>
        </div>:null
        }
        {
          this.state.showStay===true?<div>
          <div className="Container">{StayCard}</div>
        </div>:null
        }
        <OpenFoodCard mainImage={this.state.Restaurant[6].RestaurantImage} 
         mainRestaurantImage={this.state.Restaurant[6].RestaurantImage}
         title={this.state.Restaurant[6].RestaurantName}/>
      </div>
    )
  }
}

export default App;
