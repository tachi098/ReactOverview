import {
    FETCH_EMPLOYEES,
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from "./../actions-types/EmployeeType";

var initialState = [];

const EmployeeReducer = (employees = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_EMPLOYEE:
            return [...employees, payload];
        case FETCH_EMPLOYEES:
            return payload;
        case DELETE_EMPLOYEE:
            return employees.filter((item) => item.id !== payload.id);
        case UPDATE_EMPLOYEE:
            return employees.map((employee) => {
                if (employee.id === payload.id) {
                    return {
                        ...payload,
                    };
                } else {
                    return employee;
                }
            });
        default: return employees
    }
}

export default EmployeeReducer;