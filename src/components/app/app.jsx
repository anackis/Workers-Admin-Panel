
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
        {name: 'Kate K.', salary: 3000, increase: false, rise: false, id: 3}
      ],
      term: ''
    }
    this.maxId = 4;
  }
 
  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    if (name !== '' && salary !== '') {
      this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      })
    }
    
  }

  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, increase: !item.increase}
  //       } 
  //       return item;
  //     })
  //   }))
  // }
  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, rise: !item.rise}
  //       } 
  //       return item;
  //     })
  //   }))
  // }
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        } 
        return item;
      })
    }))
  }

  serachEmp = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1 /// indexOf return -1 if he cant find "term" in string 
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term})  /// term: term  ===  term
  }
  
  render() {
    const {data, term} = this.state
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.serachEmp(data, term);

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />
  
        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <AppFilter/>
          <EmployeeList 
            data={visibleData}
            onDelete={this.deleteItem}
            // onToggleIncrease={this.onToggleIncrease}
            // onToggleRise={this.onToggleRise}
            onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm
            onAdd={this.addItem}
          />
        </div>
      </div>
    );
  }
};

export default App;


