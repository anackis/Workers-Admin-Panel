
import './app-filter.scss'

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All Workers'},
    {name: 'rise', label: 'Workers for promotion'},
    {name: 'moreThen1000', label: 'Salary more than 1k'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;  /// Check if it true or false 
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button 
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
        >
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
      {/* <button className="btn btn-light" type="button">
        All Workers
      </button>
      <button className="btn btn-outline-light" type="button">
        Workers for promotion
      </button> */}
    </div>
  );
};

export default AppFilter;