import React from "react";
import "./Main.css";
import Button from "../Button/Button";
import Testimonials from "../Testimonials/Testimonials";
import WeekSpecials from "../WeekSpecials/WeekSpecials";

import restaurantFood from "../assets/restauranfood.jpg";
import restaurant from "../assets/restaurant.jpg";
import restaurantChef from "../assets/restaurant-chef.jpg";

const Main = () => {
  return (
    <main>
      <section className="bio">
        <div className="bioContainer">
          <div className="bannerText">
            <h1 className="bannerTitle">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p className="leadText">We are a family owned Mediterranean restaurant, focused on  traditional recipes served with a modern twist.</p>
            <Button>
              <p className="buttonText">Reserve a Table</p>
            </Button>
          </div>

          <div className="asideImage">
            <img src={restaurantFood} alt="restaurant chef example" />
          </div>
        </div>
      </section>

      <WeekSpecials />

      <Testimonials />

      <section className="aboutSection">
        <div className="aboutText">
          <h1 className="aboutTitle">Little Lemon</h1>
          <h2 className="aboutSubtitle">Chicago</h2>
          <p className="aboutParagraph">Discover a culinary journey at Little Lemon Restaurant, where fresh, locally sourced ingredients meet creative flavors.</p>
          <p className="aboutParagraph">Our menu is a celebration of traditional recipes with a touch of modern cuisine. Join us for an unforgettable dining experience in a cozy and pet-friendly atmosphere in the heart of Chicago.</p>
        </div>

        <div className="aboutImages">
          <img src={restaurantChef} alt="Restaurant's chef preparing a meal" className="over" />
          <img src={restaurant} alt="Little Lemon's ambiance" className="under" />
        </div>
      </section>

      <section></section>
    </main>
  )
}

export default Main;
