import React, { Component } from 'react';
import Foodcard from './Components/FoodCard/Foodcard';
import Staycard from './Components/StayCard/Staycard';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  state={
        Restaurant:[
        {RestaurantName: "Super Donuts",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res1" },
        {RestaurantName: "Cafe Ivy",
          RestaurantRating:4.5,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res2" },
        {RestaurantName: "Walnut Restaurant",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res3"},
        {RestaurantName: "Landour Bakery",
          RestaurantRating:4.5,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res4"},
        {RestaurantName: "Walnut Restaurant",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res5"},
        {RestaurantName: "Kingfisher Restaurant",
          RestaurantRating:3.9,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res6"},
        {RestaurantName: "L'Opéra Dehradun",
          RestaurantRating:4.8,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res7"},
        {RestaurantName: "Mussoorie Lights",
          RestaurantRating:4.6,
          RestaurantLocation:"Mussoorie",
          RestaurantKey:"Res8"},
        {RestaurantName: "First Gear Cafe",
          RestaurantRating:4.2,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res9"},
        {RestaurantName: "Bikanervala",
          RestaurantRating:4.5,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res10"},
        {RestaurantName: "The Great Indian Pub",
          RestaurantRating:4.2,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res11"},
        {RestaurantName: "Flow Bistro",
          RestaurantRating:4.1,
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res12"}
        ],
        Stay:[
        {StayName: "Super Donuts",
          StayRating:4.5,
          StayLocation:"DehraDun",
          StayKey:"Stay1"},
        {StayName: "Cafe Ivy",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay2"},
        {StayName: "Walnut Restaurant",
          StayRating:4.5,
          StayLocation:"DehraDun",
          StayKey:"Stay3"},
        {StayName: "Landour Bakery",
          StayRating:4.5,
          StayLocation:"Mussoorie",
          StayKey:"Stay4"},
        {StayName: "Walnut Restaurant",
          StayRating:4.5,
          StayLocation:"DehraDun",
          StayKey:"Stay5"},
        {StayName: "Kingfisher Restaurant",
          StayRating:3.9,
          StayLocation:"DehraDun",
          StayKey:"Stay6"},
        {StayName: "L'Opéra Dehradun",
          StayRating:4.8,
          StayLocation:"DehraDun",
          StayKey:"Stay7"},
        {StayName: "Mussoorie Lights",
          StayRating:4.6,
          StayLocation:"Mussoorie",
          StayKey:"Stay8"},
        {StayName: "First Gear Cafe",
          StayRating:4.2,
          StayLocation:"DehraDun",
          StayKey:"Stay9"},
        {StayName: "Bikanervala",
          StayRating:4.5,
          StayLocation:"DehraDun",
          StayKey:"Stay10"},
        {StayName: "The Great Indian Pub",
          StayRating:4.2,
          StayLocation:"DehraDun",
          StayKey:"Stay11"},
        {StayName: "Flow Bistro",
          StayRating:4.1,
          StayLocation:"DehraDun",
          StayKey:"Stay12"}
        ],
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
    return <Foodcard resName={Restaurant.RestaurantName} 
              resLocation={Restaurant.RestaurantLocation}
              resRating={Restaurant.RestaurantRating}
              key={Restaurant.RestaurantKey}/>
    });
    //Fetching The List Of Stays
    let Stays = this.state.Stay;
    //Getting And Printing Them Individually
    let StayCard =Stays.map((Stay, Index)=>{
    //Returning Foodcard Component
    return <Staycard stayName={Stay.StayName} 
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
      </div>
    )
  }
}

export default App;
