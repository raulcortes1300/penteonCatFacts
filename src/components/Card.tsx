import React from "react";
interface CardProps {
  image: string;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, description }) => {
  return (
    <div>
      <div className="flex">
        <img src={image} />
        {name}
      </div>
      {description}
    </div>
  );
};

export default Card;
