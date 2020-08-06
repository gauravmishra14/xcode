import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Please
        <Link to={{ pathname: "/login" }}>{" "}Login</Link>
      </p>
    </div>
  );
};

export default Home;
