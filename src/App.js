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
          RestaurantType:"https://png.icons8.com/ios/50/000000/cafe-filled.png",
          RestaurantAddress:"Shop No-5, Lower Ground Floor, World Trade Tower Bikanervala Complex, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res1",
          RestaurantImage:"http://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/SuperDonuts.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Cafe Ivy",
          RestaurantRating:4.5,
          RestaurantType:"https://png.icons8.com/ios/50/000000/cafe-filled.png",
          RestaurantAddress:"Chardukhan, Landour Cant, Near Sbi Bank, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res2",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Cafe-Ivy.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Uncle M Hungry",
          RestaurantRating:4.5,
          RestaurantType:"https://png.icons8.com/ios/50/000000/restaurant-table-filled.png",
          RestaurantAddress:"Inside Osho Resorts . Delhi Public School, 111, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res3",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/Uncle-M-Hungry.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Landour Bakery",
          RestaurantRating:4.5,
          RestaurantType:"https://png.icons8.com/ios/50/000000/confectionery-filled.png",
          RestaurantAddress:"152, Sisters Bazaar, Landour, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res4",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Landour-Bakery.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Tea Room at Alaya",
          RestaurantRating:4.5,
          RestaurantType:"https://png.icons8.com/ios/50/000000/cafe-filled.png",
          RestaurantAddress:"98, Old Mussoorie Rd, Kairwaan Gaon, Dehradun, Uttarakhand 248009",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res5",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Alaya.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Honey Hut",
          RestaurantRating:4.2,
          RestaurantType:"https://png.icons8.com/ios/50/000000/restaurant-table-filled.png",
          RestaurantAddress:"Landour bazar Rd, The Mall Road, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res6",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788992/Honey_Hut.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "L'Opéra Dehradun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantRating:4.8,
          RestaurantType:"https://png.icons8.com/ios/50/000000/confectionery-filled.png",
          RestaurantAddress:"46, EC Road, Race Course, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantKey:"Res7",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Lopers.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Mussoorie Lights",
          RestaurantRating:4.6,
          RestaurantType:"https://png.icons8.com/ios/50/000000/restaurant-table-filled.png",
          RestaurantAddress:"Hotel Park View, Rajpur Rd, Ashtley Hall, Chukkuwala, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res8",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Mussoorie_Lights.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "First Gear Cafe",
          RestaurantRating:4.2,
          RestaurantType:"https://png.icons8.com/ios/50/000000/cafe-filled.png",
          RestaurantAddress:"Mussoorie Road, Near Shiv Mandir, Khala Gaon, Dehradun District, Rajpur, Uttarakhand 248009",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res9",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/First_Gear_Cafe.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Bikanervala",
          RestaurantRating:4.5,
          RestaurantType:"https://png.icons8.com/ios/50/000000/restaurant-table-filled.png",
          RestaurantAddress:"99,World Trade Tower, Rajpur Road, Opp.Garhwal Mandal, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res10",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532789000/Bikanervala.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Great Indian Pub",
          RestaurantRating:4.2,
          RestaurantType:"https://png.icons8.com/ios/50/000000/bar-filled.png",
          RestaurantAddress:"Roof Top, Doon Zone, 138/345, Rajpur Road, Jakhan, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res11",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788998/The_Great_Indian_Pub.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Flow Bistro",
          RestaurantRating:4.1,
          RestaurantType:"https://png.icons8.com/ios/50/000000/bar-filled.png",
          RestaurantAddress:"Shop number 16 & 17, Pacific Hills, near Mussoorie Diversion, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res12",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Flow-Bistro.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]}
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
        showStay: false,
        OpenFoodCard:false,
  };
  showFoodHandler=()=>{
      this.setState({
        showFood:true,
        showStay:false,
        OpenFoodCard:false,
      })
  }
  showStayHandler=()=>{
    this.setState({
      showStay: true,
      showFood:false,
      OpenFoodCard:false,
    })
  }

  showOpenFoodCard=(RestaurantIndex)=>{
    let GetIndex = RestaurantIndex;
    console.log(GetIndex);
    this.setState({
      showFood:false,
      OpenFoodCard:true,
    })
  }
  render(){
    //Fetching The List Of Restaurants
    let Restaurants = this.state.Restaurant;
    //Getting And Printing Them Individually
    let ResCard = Restaurants.map((Restaurant, Index)=>{
    //Returning Foodcard Component
    return <Foodcard 
              showOpenFoodCard={()=>this.showOpenFoodCard(Index)} 
              imageSource={Restaurant.RestaurantImage}
              rating={this.state.ratingImage}
              resName={Restaurant.RestaurantName}
              resLocation={Restaurant.RestaurantLocation}
              resType={Restaurant.RestaurantType}
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

    let ResIndex =()=>{
      return 6;
    }
    return (
      <div>
        < Header Food = {this.showFoodHandler} Stay={this.showStayHandler}/>
        <div className="MainHomeContainer">
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
          {this.state.OpenFoodCard ?
            <div>
            <OpenFoodCard mainImage={this.state.Restaurant[ResIndex()].RestaurantImage}
            mainRestaurantImage={this.state.Restaurant[ResIndex()].RestaurantImage}
            title={this.state.Restaurant[ResIndex()].RestaurantName}
            RestaurantAddress={this.state.Restaurant[ResIndex()].RestaurantAddress}/>
            </div>:null
          }
         </div>
      </div>
    )
  }
}

export default App;
