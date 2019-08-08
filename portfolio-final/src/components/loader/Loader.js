import React from "react";
import Infinity from '../../Infinity.svg';

const Loader = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Infinity} className="App-infinity" alt="infinity" />
      </header>
    </div>
  );
};

export default Loader;
