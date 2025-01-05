import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "remixicon/fonts/remixicon.css";
import "./components/commen/ItemList.css";
import ScrollToTop from "./components/commen/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Branch from "./pages/Branch";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import EventsView from "./pages/EventView";
import Facilities from "./pages/Facilities";
import FacilitiesView from "./pages/FacilitiesView";
import Admission from "./pages/Admission";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/facilities" element={<Facilities />} />
          {/* <Route path="/facilities-view/:id" element={<FacilitiesView />} /> */}
          <Route path="/event-view/:id" element={<EventsView />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
