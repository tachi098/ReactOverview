import { combineReducers } from "redux";
import employees from './EmployeeReducer';

export default combineReducers({
    employee: employees,
});

