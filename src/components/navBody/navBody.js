import React from 'react';
import { Link } from "react-router-dom";
import './navBody.css';

const NavBody = () => {
    return (
        <div className="navWrap">
            <Link to="/newDepartment" className={window.location.pathname === "/newDepartment" ? "nav-link active" : "nav-link", "btn"} >Add Department</Link>
            <Link to="/newEmployee" className={window.location.pathname === "/newEmployee" ? "nav-link active" : "nav-link", "btn"}>Add Employee</Link>
            <Link to="/veiwEmployees" className={window.location.pathname === "/veiwEmployees" ? "nav-link active" : "nav-link", "btn"}>View Employee</Link>
        </div>
    )
}


export default NavBody;