import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component.js"


const Hatspage = () => (
  <div>
    <h1>
      Hats page
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
