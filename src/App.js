import React from 'react';
import './App.css';
import Main from './components/main';
import Avatar from './components/avatar/avatar';
import Footer from './components/footer/footer';
import FindMore from './gtkmButton/button';
import AboutMe from './components/about-me/about-me-main';
import { Route } from 'react-router-dom';
import About from './components/about-me/pages/about-details';
import TechStack from './components/about-me/pages/techstack';
import Contact from './components/contact-me/contact';
import Project from './components/projects/projects';
import Blog from './components/blog/blog';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Main} />
      <Route exact path='/about' component={AboutMe} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/projects' component={Project} />
      <Route exact path='/blog' component={Blog} />
    </div>
  );
}

export default App;
