import React, { Component } from 'react';
import Foodcard from './Components/FoodCard/Foodcard';
import OpenFoodCard from './Components/FoodCard/OpenFoodCard/OpenFoodCard';
import Staycard from './Components/StayCard/Staycard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  state={
        index:null,
        Restaurant:[
        {RestaurantName: "Super Donuts",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"#",
          RestaurantInstagram:"https://www.instagram.com/superdonutsindia",
          RestaurantWeb:"http://superdonuts.in",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Shop No-5, Lower Ground Floor, World Trade Tower Bikanervala Complex, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res1",
          RestaurantImage:"http://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/SuperDonuts.jpg",
          RestaurantThumbImage:"http://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/SuperDonuts.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Cafe Ivy",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/cafeivylandour",
          RestaurantInstagram:"https://www.instagram.com/cafeivy",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Chardukhan, Landour Cant, Near Sbi Bank, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Landour",
          RestaurantMustTry:"Pancakes, Waffles, Baked Chicken Nachos, Pizza",
          RestaurantKey:"Res2",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Cafe-Ivy.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788986/Cafe-Ivy.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Uncle M Hungry",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/unclemhungryosho",
          RestaurantInstagram:"https://www.instagram.com/unclemhungry",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"Inside Osho Resorts . Delhi Public School, 111, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res3",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/Uncle-M-Hungry.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788995/Uncle-M-Hungry.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Landour Bakery",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/LandourBakehouse",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/office/50/000000/confectionery.png",
          RestaurantAddress:"152, Sisters Bazaar, Landour, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Sisters Bazaar",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res4",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Landour-Bakery.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/Landour-Bakery.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Tea Room at Alaya",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/TheTeaRoomatAlaya",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"98, Old Mussoorie Rd, Kairwaan Gaon, Dehradun, Uttarakhand 248009",
          RestaurantLocation:"Kairwaan Gaon",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res5",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Alaya.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/Alaya.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Honey Hut",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/Honey-Hut-Mussoorie-1569728676599887",
          RestaurantInstagram:"#",
          RestaurantWeb:"https://www.honeyhut.co.in",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"Landour bazar Rd, The Mall Road, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Mall Road, Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res6",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788992/Honey_Hut.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788992/Honey_Hut.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "L'Opéra Dehradun",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantRating:4.8,
          RestaurantFacebook:"https://www.facebook.com/LOpera-Dehradun-383058105401148",
          RestaurantInstagram:"#",
          RestaurantWeb:"https://loperaindia.com",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/office/50/000000/confectionery.png",
          RestaurantAddress:"46, EC Road, Race Course, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Race Course",
          RestaurantKey:"Res7",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Lopers.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788996/Lopers.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Mussoorie Lights",
          MealPrice:"Rs 500 - Rs 5,000",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.6,
          RestaurantFacebook:"https://www.facebook.com/mussoorielights",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Hotel Park View, Rajpur Rd, Ashtley Hall, Chukkuwala, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Chukkuwala",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res8",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Mussoorie_Lights.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788996/Mussoorie_Lights.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "First Gear Cafe",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/1stgearcafe",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Mussoorie Road, Near Shiv Mandir, Khala Gaon, Dehradun, Rajpur, Uttarakhand 248009",
          RestaurantLocation:"Khala Gaon",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res9",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/First_Gear_Cafe.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788995/First_Gear_Cafe.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Bikanervala",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/bikanervalafoods",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"99,World Trade Tower, Rajpur Road, Opp.Garhwal Mandal, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res10",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532789000/Bikanervala.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532789000/Bikanervala.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Great Indian Pub",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/thegreatindianpub",
          RestaurantInstagram:"https://www.instagram.com/thegreatindianpub/",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Roof Top, Doon Zone, 138/345, Rajpur Road, Jakhan, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Jakhan",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res11",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788998/The_Great_Indian_Pub.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788998/The_Great_Indian_Pub.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Flow Bistro",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.1,
          RestaurantFacebook:"https://www.facebook.com/flowbistro",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Shop number 16 & 17, Pacific Hills, near Mussoorie Diversion, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res12",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Flow-Bistro.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788986/Flow-Bistro.jpg",
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
        mealPriceImage:"https://png.icons8.com/color/50/000000/rupee.png",
        timingImage:"https://png.icons8.com/ios/50/000000/clock-filled.png",
        showFood: false,
        showStay: false,
        OpenFoodCard:false,
        RestaurantContact:"+91 9560 788 976",
        showFooter:false
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
showOpenFoodCard=(ResIndex)=>{
    this.setState({
      showFood:false,
      OpenFoodCard:true,
      index:ResIndex,
    })
  }
ToggleFooter=()=>{
     let currentFooterPostion = this.state.showFooter;
     this.setState({
          showFooter : !currentFooterPostion,
     })
  }
FilterByLocation=(FilterIndex)=>{
    let Restaurants = this.state.Restaurant;
     Restaurants.filter((Restaurant)=>{
               return Restaurant.RestaurantLocation === this.state.Restaurant[FilterIndex].RestaurantLocation
     }).map((Restaurant, Index)=> console.log(Restaurant.RestaurantName)
     )
  }
FilterByResType=()=>{
     let Restaurants = this.state.Restaurant;
     Restaurants.filter((Restaurant)=>{
               return Restaurant.RestaurantType === this.state.Restaurant[this.state.index].RestaurantType
     }).map((Restaurant, Index)=> console.log(Restaurant.RestaurantName)
     )
  }
FilterByResTypeInHomePage=(HomePageFilterIndex)=>{
     let Restaurants = this.state.Restaurant;
     Restaurants.filter((Restaurant)=>{
          return Restaurant.RestaurantType === Restaurants[HomePageFilterIndex].RestaurantType
     }).map((Restaurant)=>console.log(Restaurant.RestaurantName))
}

render(){
    //Fetching The List Of Restaurants
    let Restaurants = this.state.Restaurant;
    //Getting And Printing Them Individually
    let ResCard = Restaurants.map((Restaurant, Index)=>{
    //Returning Foodcard Component
    return <Foodcard
              FilterByResType={()=>this.FilterByResTypeInHomePage(Index)}
              FilterByLocation={()=>this.FilterByLocation(Index)}
              showOpenFoodCard={()=>this.showOpenFoodCard(Index)} 
              MealPrice={Restaurant.MealPrice}
              imageSource={Restaurant.RestaurantThumbImage}
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

    return (
     <div className="MainBody">
        <Header Food = {this.showFoodHandler} Stay={this.showStayHandler}/>
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
          {
            this.state.OpenFoodCard ?
            <div>
            <OpenFoodCard mainImage={this.state.Restaurant[this.state.index].RestaurantImage}
            MealPrice={this.state.Restaurant[this.state.index].MealPrice}
            MealPriceImage={this.state.mealPriceImage}
            mainRestaurantImage={this.state.Restaurant[this.state.index].RestaurantImage}
            RestaurantType={this.state.Restaurant[this.state.index].RestaurantType}
            FilterByResType={this.FilterByResType}
            title={this.state.Restaurant[this.state.index].RestaurantName}
            RestaurantAddress={this.state.Restaurant[this.state.index].RestaurantAddress}
            RestaurantMustTry={this.state.Restaurant[this.state.index].RestaurantMustTry}
            timingImage={this.state.timingImage}
            RestaurantDineService={this.state.Restaurant[this.state.index].RestaurantDineService}
            RestaurantAC={this.state.Restaurant[this.state.index].RestaurantAC}
            RestaurantBar={this.state.Restaurant[this.state.index].RestaurantBar}
            RestaurantOutdoorArea={this.state.Restaurant[this.state.index].RestaurantOutdoorArea}
            RestaurantBooking={this.state.Restaurant[this.state.index].RestaurantBooking}
            RestaurantSmoking={this.state.Restaurant[this.state.index].RestaurantSmoking}
            RestaurantVegNonVeg={this.state.Restaurant[this.state.index].RestaurantVegNonVeg}
            RestaurantDessert={this.state.Restaurant[this.state.index].RestaurantDessert}
            RestaurantTimings={this.state.Restaurant[this.state.index].RestaurantTimings}
            RestaurantFacebook={this.state.Restaurant[this.state.index].RestaurantFacebook}
            RestaurantInstagram={this.state.Restaurant[this.state.index].RestaurantInstagram}
            RestaurantWeb={this.state.Restaurant[this.state.index].RestaurantWeb}
            RestaurantContact={this.state.RestaurantContact}/>
            </div>:null
          }
         </div>
         <div className="FooterArea">
               <div id="ToggleFooterArea" className="ToggleFooterArea" onClick={this.ToggleFooter}>
                    <div className="ToggleFooter">
                         <p className="ToggleFooterText">Lets be Friends</p>
                   </div>
              </div>
              {
               this.state.showFooter ? <div className="FooterAdj"><Footer/></div>:null
              }
         </div>
     </div>
    )
  }
}

export default App;
