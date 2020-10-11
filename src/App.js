import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/Home'
import Portfolio from './components/Projects/Portfolio'

function App() {
  return (
    <div className='App'>
      <Router>
    <Nav />
    <Switch>
      <Route path='/' exact />
    </Switch>
      </Router>
      
      <main>
      <Portfolio />
      </main>

    </div>
    
  );
}

export default App;
