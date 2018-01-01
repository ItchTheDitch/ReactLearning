import React, { Component } from 'react';
import './App.css';
import Particle from './components/Particle';
import SnowParticle from './components/SnowParticle';

class App extends Component {
  render() {
    return (
        <div className="Parent">
            <Particle/>
            <SnowParticle/>
            <h1 className="Header">Welcome to Ryan Henry Website</h1>
            <h2 className="Header2">Under Construction</h2>
        </div>
    );
  }
}


export default App;
