import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import header from './components/header/header';
import NavBody from './components/navBody/navBody';
import newDepartmentBody from './components/newDepartmentBody/newDepartmentBody';
import newEmployeeBody from './components/newEmployeeBody/newEmployeeBody';


// displays the components
const App = () => (

  <Router>

    <Route path="/" exact component={header} />
    <Route path="/" exact component={NavBody} />

    <Route path="/newDepartment" exact component={header} />
    <Route path="/newDepartment" exact component={newDepartmentBody} />
    <Route path="/newEmployee" exact component={header} />
    <Route path="/newEmployee" exact component={newEmployeeBody} />
    <Route path="/veiwEmployees" exact component={header} />

  </Router>
);

export default App;