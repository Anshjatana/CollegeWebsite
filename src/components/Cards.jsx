import React from "react";
import "../styles.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card" id="card">
      <img
        src={image}
        alt="Card-img"
        className="card-image"
        id="img"
        width={180}
      />
      <h3 className="card-title" id="title">
        {title}
      </h3>
      <p className="card-description" id="description">
        {description}
      </p>
    </div>
  );
};

export default Card;
