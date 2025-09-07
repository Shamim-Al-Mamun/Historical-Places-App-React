import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, toggleVisited } from "../store";

export default function Details() {
  const { id } = useParams();
  const place = useSelector((state: RootState) =>
    state.places.find((p) => p.id === id)
  );
  const dispatch = useDispatch();

  if (!place) {
    return <p className="details-empty">Place not found</p>;
  }

  // Split into first and second paragraph
  const mid = Math.floor(place.description.length / 2);
  const firstPeriodIndex = place.description.lastIndexOf(".", mid);
  const splitIndex = firstPeriodIndex !== -1 ? firstPeriodIndex + 1 : mid;
  const firstPara = place.description.slice(0, splitIndex).trim();
  const secondPara = place.description.slice(splitIndex).trim();

  return (
    <div className="details-safeArea">
      <div className="details-container">
        <img src={place.image} alt={place.name} className="details-image" />

        {/* First para (title + visited mark) */}
        <h2 className="details-name">
          {place.name} {place.visited && "✅"}
        </h2>
        <p className="details-desc">{firstPara}</p>

        {/* Second para */}
        <p className="details-desc">{secondPara}</p>

        {/* Toggle button */}
        <button
          className={`toggle-btn ${place.visited ? "unmark" : "mark"}`}
          onClick={() => dispatch(toggleVisited(place.id))}
        >
          {place.visited ? "Unmark as Visited" : "Mark as Visited"}
        </button>
      </div>
    </div>
  );
}