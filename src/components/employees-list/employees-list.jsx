
import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';

const EmployeeList = ({data, onDelete}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem 
      key={id} 
      {...itemProps} // name={item.name} salary={item.salary} === {...item}
      onDelete={() => onDelete(id)}
      />  
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
};

export default EmployeeList;