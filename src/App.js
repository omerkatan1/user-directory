import React from 'react';
// import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import header from './components/header/header';
import NavBody from './components/navBody/navBody';
import newDepartmentBody from './components/newDepartmentBody/newDepartmentBody';
import newEmployee from './components/newEmployeeBody/newEmployeeBody';
import veiwEmployees from './components/viewEmployeeBody/viewEmployee';




// displays the components
const App = () => (

  <Router>

    <Route path="/" exact component={header} />
    <Route path="/" exact component={NavBody} />

    <Route path="/newDepartment" exact component={header} />
    <Route path="/newDepartment" exact component={newDepartmentBody} />
    <Route path="/newEmployee" exact component={header} />
    <Route path="/newEmployee" exact component={newEmployee} />
    <Route path="/veiwEmployees" exact component={header} />
    <Route path="/veiwEmployees" exact component={veiwEmployees} />

  </Router>
);

export default App;