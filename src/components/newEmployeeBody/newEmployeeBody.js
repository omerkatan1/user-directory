import React from 'react';
import axios from 'axios';
import './newEmployeeBody.css';

export default class newEmployee extends React.Component {
    state = {
      name: '',
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSave = event => {
      event.preventDefault();
  
      const employee = {
        employee: this.state.name
      };
  
      axios.post(`http://localhost:3000/api/saveEmployee`, { employee })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSave}>
            <label>
              Employee Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
  