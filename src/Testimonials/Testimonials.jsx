import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Testimonials.css";
import CustomerCard from "../CustomerCard/CustomerCard";

const Testimonials = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 400,
    responsive: [
      {
        breakpoint: 939,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return(
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
          <div className="slider-container customerCards">
            <Slider 
              {...settings}
              slidesToShow={4}
              slidesToScroll={2}
              initialSlide={0}
            >
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
            </Slider>
          </div>
        </article>
      </section>
  )
}

export default Testimonials;
