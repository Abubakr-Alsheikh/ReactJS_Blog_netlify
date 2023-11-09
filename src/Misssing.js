import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Misssing = () => {
  return (
    <main className="Missing">
      <h2>Page not found</h2>
      <p>hmm... Something went wrong!</p>
      <p>
        <Link to="/">Visit our Homepage</Link>
      </p>
    </main>
  );
};

export default Misssing;
