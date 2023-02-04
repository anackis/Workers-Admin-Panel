
import { Component } from 'react';
import './employees-list-item.scss'

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      favorite: false
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    })) 
  }

  favoriteFunc = () => {
    this.setState(({favorite}) => ({
      favorite: !favorite
    }))
  }

  render() {
    const {name, salary, onDelete} = this.props
    const {increase, favorite} = this.state;
    let classNames = "list-group-item d-flex justify-content-between"
    if (increase) {
      classNames += ' increase';
    }
    if (favorite) {
      classNames += ' like';
    }
    return (
      <li className={classNames}>
        <span onClick={this.favoriteFunc} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={this.onIncrease} type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>
          <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }

};

export default EmployeesListItem;