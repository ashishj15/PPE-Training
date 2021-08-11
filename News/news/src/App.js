import React from 'react';
import './App.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Blogs from './pages/blogs';

  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/blogs' component={Blogs} />
      </Switch>
    </Router>
  );
}
  
export default App;