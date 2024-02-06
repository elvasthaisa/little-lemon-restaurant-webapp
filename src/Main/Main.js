import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Main.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

import restaurantFood from "../assets/restauranfood.jpg";
import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

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
          <FontAwesomeIcon icon={faStar} />
          <div>

          </div>
        </article>
      </section>

      <section></section>

      <section></section>
    </main>
  )
}

export default Main;
