
import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState(() => {
      return {
        name: '',
        salary: ''
      }
    })
  }


  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new worker</h3>
        <form
        onSubmit={this.onSubmit}
          className="add-form d-flex">
          <input
            onChange={this.onValueChange}
            value={name} 
            name="name" 
            type="text" 
            className="form-control new-post-label" 
            placeholder="Name" 
          />
          <input
            onChange={this.onValueChange}
            value={salary} 
            name="salary" 
            type="number" 
            className="form-control new-post-label" 
            placeholder="Salary" 
          />
          <button type="submit" className="btn btn-outline-light">Add Worker</button>
        </form>
      </div>
    );
  }
};

export default EmployeesAddForm;