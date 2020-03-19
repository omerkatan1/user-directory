import React from 'react';
import './newDepartmentBody.css';

const newDepartmentBody = () => {
    return (
        <div className="newDepartmentWrap">

            <form action="/saveDepartment" method="post">
                <label className="departmentLabel" for="departmentName">Enter Your Department Name:</label>
                <input className="departmentInput" name="departmentName" placeholder="Enter Department"></input>
                <button type="submit" name="saveDepartment">Save</button>
            </form>

        </div>
    )
}

export default newDepartmentBody;