import React from "react";

const Loader = () => {
  return (
    <div className="loading">
      <h3>Loading...</h3>
      <div className="loading-spinner-rolling-container">
        <div className="loading-spinner">
          <div></div>
        </div>
      </div>
      
    </div>
  );
};

export default Loader;
