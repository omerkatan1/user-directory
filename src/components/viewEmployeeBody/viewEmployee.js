import React from 'react';
import axios from 'axios';


export default class EmployeeList extends React.Component {
    state = {
      employees: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000/api/saveEmployee`)
        .then(res => {
            console.log(res);
            const employees = res.data;
            this.setState({ employees });
        })
    }
  
    render() {
      return (
        <ul>
            { 
                this.state.employees.map(employee => 
                    <li>
                        {employee.name}
                    </li>
                )
            }
        </ul>
      )
    }
  }