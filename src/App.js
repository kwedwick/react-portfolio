import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path='/react-portfolio/' exact component={About}/>
          <Route path='/react-portfolio/projects' component={Projects} />
          <Route path='/react-portfolio/resume' component={Resume} />
          <Route path='/react-portfolio/contact' component={Contact} />
        </Switch>
      </Router>
      <main></main>
      <Footer />
    </div>

  );
}

export default App;
