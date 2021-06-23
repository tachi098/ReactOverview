class EmployeemModel { 
    constructor(
        id = null,
        name = "",
        salary = 0,
        gender = 0,
        status = false
    ){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.status = status;
    }
}

export default new EmployeemModel();
