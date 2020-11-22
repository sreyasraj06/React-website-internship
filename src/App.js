import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import More from './components/pages/More';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Home />
        <Switch>
          <Route path='/' exact   component={Home} />
          <Route path='/games' component={Games} />
          <Route path='/more' component={More} />
        </Switch>
      </Router>
    </>
    
  );   
}

export default App;
