
import './app-filter.scss'

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All Workers
      </button>
      <button className="btn btn-outline-light" type="button">
        Workers for promotion
      </button>
      <button className="btn btn-outline-light" type="button">
        Salary more than 1k
      </button>
    </div>
  );
};

export default AppFilter;