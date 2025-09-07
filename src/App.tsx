import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Visited from "./pages/Visited";
import Details from "./pages/Details";
import "./App.css";

export default function App() {
  return (
    <div className="app">

      <nav className="tabs">
        <NavLink to="/" end className="tab">
          Home
        </NavLink>
        <NavLink to="/visited" className="tab">
          Visited
        </NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visited" element={<Visited />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}
