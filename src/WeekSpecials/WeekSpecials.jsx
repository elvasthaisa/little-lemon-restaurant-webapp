import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import salad from "../assets/salad.jpg";
import bruschetta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import Button from "../Button/Button";
import Card from "../Card/Card";
import "./WeekSpecials.css";

const WeekSpecials = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    responsive: [
      {
        breakpoint: 939,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return(
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

        <div className="slider-container">
          <Slider 
            {...settings}
            slidesToShow={2.5}
            slidesToScroll={2.5}
            initialSlide={0}
          >
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
          </Slider>
        </div>
      </section>
  )
}

export default WeekSpecials;
