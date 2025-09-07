import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisited, RootState } from "../store";
import { useNavigate } from "react-router-dom";

export default function Visited() {
  const places = useSelector((state: RootState) =>
    state.places.filter((p) => p.visited)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="visited-safeArea">
      <div className="visited-container">
        <h2 className="visited-header">Visited Places</h2>

        {places.length === 0 ? (
          <p className="visited-empty">No places visited yet</p>
        ) : (
          <div className="visited-list">
            {places.map((item) => (
              <div
                key={item.id}
                className="visited-item"
                onClick={() => navigate(`/details/${item.id}`)}
              >
                <img src={item.image} alt={item.name} className="visited-image" />
                <div>
                  <p className="visited-name">{item.name}</p>
                  <p className="visited-desc">{item.description}</p>
                </div>
                <button
                  className="unmark-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleVisited(item.id));
                  }}
                >
                  Unmark
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
