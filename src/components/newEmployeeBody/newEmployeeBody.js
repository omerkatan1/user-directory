import React from 'react';
import './newEmployeeBody.css';

const newEmployeeBody = () => {
    return (
        <div className="newEmployeeWrap">

            <form action="/saveEmployee" method="post">
                <label className="employeeLabel" for="employeeName">Enter Your Employee Name:</label>
                <input className="employeeInput" name="employeeName" placeholder="Enter Employee"></input>
                <button type="submit" name="saveEmployee">Save</button>
            </form>

        </div>
    )
}

export default newEmployeeBody;