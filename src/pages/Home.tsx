import React, { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootState, toggleVisited } from "../store";
import { useNavigate } from "react-router-dom";
import "../App.css"; // styles moved here

type Place = RootState["places"][0];

const PlaceItem = React.memo(
  ({ item, onToggle, navigate, search }: { item: Place; onToggle: (id: string) => void; navigate: any; search: string }) => {
    const highlightText = useCallback((text: string, highlight: string) => {
      if (!highlight.trim()) return <span className="place-name">{text}</span>;
      const regex = new RegExp(`(${highlight})`, "gi");
      const parts = text.split(regex);
      return (
        <span className="place-name">
          {parts.map((part, i) =>
            regex.test(part) ? (
              <span key={i} className="highlight">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </span>
      );
    }, []);

    const truncateWords = (text: string, wordLimit: number) => {
      if (text.split(" ").length > wordLimit) {
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    };

    return (
      <div className="card" onClick={() => navigate(`/details/${item.id}`)}>
        <img src={item.image} alt={item.name} className="card-img" />
        {highlightText(truncateWords(item.name, 4) + (item.visited ? " ✅" : ""), search)}
        <p className="card-desc">{truncateWords(item.description, 15)}</p>
        <button
          className={`btn ${item.visited ? "btn-unmark" : "btn-mark"}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(item.id);
          }}
        >
          {item.visited ? "Unmark" : "Mark Visited"}
        </button>
      </div>
    );
  },
  (prev, next) => prev.item.visited === next.item.visited && prev.search === next.search
);

export default function Home() {
  const places = useSelector((state: RootState) => state.places, shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 8;

  const filteredPlaces = useMemo(
    () => places.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [places, search]
  );

  const displayedPlaces = useMemo(
    () => filteredPlaces.slice(0, page * pageSize),
    [filteredPlaces, page]
  );

  const loadMore = useCallback(() => {
    if (loading) return;
    if (displayedPlaces.length >= filteredPlaces.length) return;

    setLoading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  }, [loading, displayedPlaces.length, filteredPlaces.length]);

  const handleToggle = useCallback((id: string) => dispatch(toggleVisited(id)), [dispatch]);

  const suggestRandomPlace = useCallback(() => {
    if (places.length === 0) return;
    const unvisited = places.filter((p) => !p.visited);
    if (unvisited.length === 0) {
      alert("All places already visited!");
      return;
    }
    const randomPlace = unvisited[Math.floor(Math.random() * unvisited.length)];
    navigate(`/details/${randomPlace.id}`);
  }, [places, navigate]);

  return (
    <div>
      <h2>Top Historical Places</h2>

      {/* Nav bar with suggestion + search */}
      <div className="nav-bar">
        <button className="suggest-btn" onClick={suggestRandomPlace}>
          Suggestions
        </button>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid">
        {displayedPlaces.map((place) => (
          <PlaceItem key={place.id} item={place} onToggle={handleToggle} navigate={navigate} search={search} />
        ))}
      </div>

      {/* Load More */}
      {loading && <div className="loader-container"><div className="spinner" /></div>}
      {!loading && displayedPlaces.length < filteredPlaces.length && (
        <button onClick={loadMore} className="load-more">
          Load More
        </button>
      )}

      {displayedPlaces.length === 0 && <p className="no-results">No places found</p>}
    </div>
  );
}
