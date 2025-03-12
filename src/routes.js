import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RSVP from "./component/RSVP";
import GuestList from "./component/GuestList";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RSVP />} />  {/* Страница для гостей */}
        <Route path="/guest-list" element={<GuestList />} />  {/* Список гостей */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
