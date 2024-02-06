import "./Card.css";
import bikeIcon from "../assets/bike-icon.svg";

const Card = ({ image, alt, title, price, child }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={image} alt={alt} />
      </div>

      <div className="cardDescription">
        <div className="cardHeader">
          <p className="cardTitle">{title}</p>
          <p className="price">{price}</p>
        </div>

        <div className="cardBody">
          <p className="description">{child}</p>
          <div className="cardFooter">
            <p className="delivery">Order a delivery</p>
            <img src={bikeIcon} alt="Bike icon for delivery" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
