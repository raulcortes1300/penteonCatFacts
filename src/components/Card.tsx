import React from "react";
import type { CatFact, RandomUser } from "../types";

interface CardProps {
  fact: CatFact;
  user: RandomUser;
}

const Card: React.FC<CardProps> = ({ fact, user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">
          {user.name.first} {user.name.last}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{fact.fact}</p>
    </div>
  );
};

export default Card;
