import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import header from './components/header/header';


// displays the components
const App = () => (

  <Router>

    <Route path="/" exact component={header} />
  </Router>
);

export default App;