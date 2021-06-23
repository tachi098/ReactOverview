import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { EmployeeList } from './component/EmployeeList';
import { AddEmployee } from './component/AddEmployee';
import { EditEmployee } from './component/EditEmployee';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            EmployeeManagement
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">

              <Link to={"/employee/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container-fluid mt3">
          <div className="row">
            <Switch>
              <Route exact path={["/", "/employee"]} component={EmployeeList} />
              <Route exact path="/employee/add" component={AddEmployee} />
              <Route exact path="/employee/edit" component={EditEmployee} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
