import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="text-center">
    <h2>Page Not Found</h2>
    <button className="btn btn-outline-primary">
      <Link to="/">Go home</Link>
    </button>
  </div>
);

export default PageNotFound;
