
import './app-info.scss'

const AppInfo = ({employees, increased}) => {
  return (
    <div className="app-info">
      <h1>Company Employee List</h1>
      <h2>Total Employee Count: {employees}</h2>
      <h2>Bonus Will Get: {increased}</h2>
    </div>
  );
};

export default AppInfo;