import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import ShopDetails from './components/ShopDetails/ShopDetails';

function App() {
  return (
    <div>
      <Router>
        <Header/>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/:name">
            <ShopDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
