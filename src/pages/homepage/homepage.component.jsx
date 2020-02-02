import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Course Management System!</h1>

    <Link to="/about">about</Link>
  </div>
);

export default HomePage;
