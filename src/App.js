import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from 'Components/SearchForm';

function App() {
  require('dotenv').config()
  return (
      <Router basename = {process.env.PUBLIC_URL}>
          <main className = "marginBot20">
          <iframe src="silence.mp3" allow="autoplay" title="audio" style={{display: "none"}}></iframe>
          <audio
            src="song.wav" type = "audio/wav" autoPlay loop id = 'playAudio'>
          </audio>
            {
              <Switch>
                <Route path = "/home">
                  <Home />
                </Route>
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
