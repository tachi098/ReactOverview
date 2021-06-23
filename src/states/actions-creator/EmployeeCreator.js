import {
    FetchEmployees,
    ActionEmployeeCreate,
    ActionEmployeeDelete,
    ActionEmployeeUpdate
}from '../actions/EmployeeAction';
import EmployeeService from './../../services/EmployeeService'

// export const fetchEmployees = () => async (dispatch) => {
//     try{
//         const res = await EmployeeService.getAll();
//         dispatch(ActionFetchEmployees(res.data));
//     }catch(err){
//         console.log(err);
//     }
// }

export const getAllEmployee = () => (dispatch) => {
    EmployeeService.getAll()
        .then(res => dispatch(FetchEmployees(res.data)))
        .catch(err => console.error(err));
}

export const addEmployee = (data) => async (dispatch) => {
    try{
        const res = await EmployeeService.create(data);
        dispatch(ActionEmployeeCreate(res.data));
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
}

export const udpateEmployee = (data) => async (dispatch) => {
    try{
        const res = await EmployeeService.update(data);
        dispatch(ActionEmployeeUpdate(res.data));
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
}

export const deleteEmployee = (id) => async (dispatch) => {
    try{
        const res = await EmployeeService.remove(id);
        dispatch(ActionEmployeeDelete(res.data));
    }catch(err){
        console.log(err);
    }
}