import {
    FETCH_EMPLOYEES,
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
}from "./../actions-types/EmployeeType";

export const FetchEmployees= (data) => {
    return{
        type: FETCH_EMPLOYEES,
        payload: data
    }
}

export const ActionEmployeeCreate = (data) => {
    return{
        type: CREATE_EMPLOYEE,
        payload: data
    }
}
export const ActionEmployeeUpdate = (data) => {
    return{
        type: UPDATE_EMPLOYEE,
        payload: data
    }
}
export const ActionEmployeeDelete = (data) => {
    return{
        type: DELETE_EMPLOYEE,
        payload: data
    }
}