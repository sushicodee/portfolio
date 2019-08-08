import React from "react";
import "./Home.scss";
const Home = () => {
 
  return (
    <div className="home-container">
      {/* <div className = 'home-title'> */}
      <div className="home-title">
        <h2>Home</h2>
      </div>
      <div className = 'home-body'>
        <h1><p>
        Hi I'm Sushant,</p></h1>
        <h3>A Front End Developer based on Nepal <img className = 'nepal-flag' src = 'assets/images/flag-of-nepal.png'></img></h3>

      </div>
      <div  className = 'home-body'>
        <p>I have a diverse set of skills ranging from HTML + CSS/SCSS + javascript along with Experience in ReactJS and Angular2+</p>
      </div>
  
      
     
    </div>
  );
};

export default Home;
