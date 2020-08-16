import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from 'Components/AboutMe';
import SearchForm from 'Components/SearchForm';

function App() {
  require('dotenv').config()
  return (
      <Router basename = {process.env.PUBLIC_URL}>
          <main className = "marginBot20">
            {
              <Switch>
                <Route path = "/home">
                  <Home />
                </Route>
                {/* <Route path = "/resources">
                  <Resources />
                </Route> */}
                <Route path = "/search">
                  <SearchForm/>
                </Route>
                <Route path = ""> 
                  <Home/>
                </Route>
              </Switch>
            }        
          </main>
      </Router>   
  );
}

export default App;
