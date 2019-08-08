import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import About from "./components/about/About";
import Errors from "./components/error/Error";
import Loader from "./components/loader/Loader";
import Floater from "./components/floater/Floater";
import Contact from "./components/contact/Contact";
function App() {
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loader);
  }, []);
  const [loading, setLoading] = useState(true);

  if (loading === true) {
    return <Loader />;
  } else {
    return (
      <Router>
        <Navbar />
        <Floater />
        <Switch>
          <Route exact={true} path="/" render={() => <Redirect to="/home" />} />
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contact" component={Contact} />

          <Route
            path="/facebook"
            component={() => {
              window.location.href = "https://www.facebook.com/sushant.sthaaaa";
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.location.href = " https://github.com/sushicodee";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => { 
              window.location.href = "https://www.linkedin.com/in/sushant-shrestha-347792a4/ ";
              return null;
            }}
          />
          <Route component={Errors} />
        </Switch>
      </Router>
    );
  }
}
export default App;
