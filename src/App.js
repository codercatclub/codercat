import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './components/Menu';
import SocialViewPanel from './components/SocialViewPanel';
import ProjectsView from './components/ProjectsView';
import About from './About';
import Contacts from './Contacts';
import Gallery from './Gallery';

import './style.css';


export default function App() {
  return (
    <div id="app-view">
      <Route path="/gallery" component={Gallery} />
      <div id="center-container">
        <Menu />
        <Route exact path="/" component={ProjectsView} />
        <Route path="/contact" component={Contacts} />
        <Route path="/about" component={About} />
        <SocialViewPanel />
      </div>
    </div>
  );
}
