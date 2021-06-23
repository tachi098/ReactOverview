import http from './HttpCommon'

const getAll = () => {
    return http.get("/employee");
}

const get = (id) => {
    return http.get(`/employee/${id}`)
}

const create = (data) => {
    return http.post("/employee", data);
}

const update = (data) => {
    return http.put("/employee", data);
}

const remove = (id) => {
    return http.delete(`/employee/${id}`)
}

const EmployeeService = {
    getAll,
    get,
    create,
    update,
    remove
}

export default EmployeeService;