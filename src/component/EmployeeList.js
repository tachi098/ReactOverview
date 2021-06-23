import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { EmployeeCreator } from "../states"
import {
    deleteNotification
} from "../common/notifications/EmployeeNotification"

export const EmployeeList = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { getAllEmployee, deleteEmployee } = bindActionCreators(EmployeeCreator, dispatch)
    const employees = useSelector(state => state.employee);

    const useEffectDidmount = () => useEffect(() => {
        getAllEmployee();
    }, []);

    useEffectDidmount();

    const handleGotoDelete = (id) => {
        deleteEmployee(id);
        deleteNotification();
    }

    const handleGotoEdit = (item) => {
        history.push("/employee/edit", { employee: item });
    }

    return (
        <div className="col-md-12">
            <h1>Employee list</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.gender === 0 ? "male" : employee.gender === 1 ? "female" : "other"}</td>
                                <td><span className={employee.status ? "badge bg-success" : "badge bg-danger"}>{employee.status ? "Able" : "Enable"}</span></td>
                                <td>
                                    <button className="btn btn-danger me-2" onClick={() => { handleGotoDelete(employee.id) }}>Delete</button>
                                    <button className="btn btn-warning" onClick={() => { handleGotoEdit(employee) }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}