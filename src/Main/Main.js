import React from "react";

import "./Main.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import CustomerCard from "../CustomerCard/CustomerCard";

import restaurantFood from "../assets/restauranfood.jpg";
import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import restaurant from "../assets/restaurant.jpg";
import restaurantChef from "../assets/restaurant-chef.jpg";

const Main = () => {
  return (
    <main>
      <section className="bio">
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
      </section>

      <section className="weekSpecialsSection">
        <div className="menuHeader">
          <h1 className="menuTitle">This week's specials!</h1>
          <Button>
            <p className="buttonText">Online Menu</p>
          </Button>
        </div>

        <div className="menuCards">
          <Card
            image={salad}
            alt="Greek salad plate"
            title="Greek Salad"
            price="$ 12.99"
            child="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Card
            image={bruschetta}
            alt="Bruschetta plate"
            title="Bruschetta"
            price="$ 5.99"
            child="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <Card
            image={lemonDessert}
            alt="Lemon dessert plate"
            title="Lemon Dessert"
            price="$ 5.00"
            child="Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>

      <section>
        <article>
          <h2>What our customers say!</h2>

          <div className="custCardGroup">
            <CustomerCard
              name="Sara Lopez"
              username="Sara72"
              text="“Seriously cannot stop thinking about the Turkish meal with Cheese!”"
            />
            <CustomerCard
              name="John Doe"
              username="Johnny_Doe"
              text="“We had such a great time celebrating my granddaughter’s birthday!”"
            />
            <CustomerCard
              name="Tim Barbera"
              username="TimmyB101"
              text="“Best Feta Salad in town, flawless everytime I taste it!”"
            />
            <CustomerCard
              name="George Carlton"
              username="GCarl81"
              text="“Such a chilled out atmosphere. I love there.”"
            />

          </div>
        </article>
      </section>

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
