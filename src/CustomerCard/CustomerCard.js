import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./CustomerCard.css";

const CustomerCard = ({ name, username, text }) => {
  return (
    <div className="customerCard">
      <div className="rating">
        <FontAwesomeIcon icon={faStar} style={{ color: "#F4CE14" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#F4CE14" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#F4CE14" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#F4CE14" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#F4CE14" }} />
      </div>

      <div className="userProfile">
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ color: "#EDEFEE", height: "60px", marginRight: "16px" }}
        />

        <div className="user">
          <p className="name">{name}</p>
          <p className="username">{username}</p>
        </div>
      </div>
      <p className="testimonial">{text}</p>
    </div>
  )
}

export default CustomerCard;
