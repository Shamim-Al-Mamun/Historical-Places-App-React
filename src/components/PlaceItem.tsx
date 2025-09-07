import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleVisited } from "../store";
import { Place } from "../store";

type Props = {
  place: Place;
};

export default function PlaceItem({ place }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="place">
      <img src={place.image} alt={place.name} className="place-img" />
      <div className="place-info">
        <Link to={`/details/${place.id}`} className="place-title">
          {place.name}
        </Link>
        <p className="place-desc">{place.description}</p>
      </div>
      <button
        onClick={() => dispatch(toggleVisited(place.id))}
        className={place.visited ? "btn visited" : "btn unvisited"}
      >
        {place.visited ? "Unmark" : "Mark"}
      </button>
    </div>
  );
}
