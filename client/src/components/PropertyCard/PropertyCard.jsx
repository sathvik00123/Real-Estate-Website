import React from "react";
import "./PropertyCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <img src={card.image} alt="home" />
      <Heart id={card?.id}/>
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">
        {truncate(card.title, { length: 18 })}
      </span>
      <span className="secondarytext">
        {truncate(card.description, { length: 100 })}
      </span>
    </div>
  );
};

export default PropertyCard;
