import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <div className='App'>
      <Router basename="/">
        <Nav />
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <main></main>
      <Footer />
    </div>

  );
}

export default App;
