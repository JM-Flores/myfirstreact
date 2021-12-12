import httpCommon from "../commons/http-common";

const getEmployees = () =>{

    return httpCommon.get('employee/employees');
}

const postEmployees = (data) =>{
    return httpCommon.post('employee/employees', data)
}

const getEmployee = (employeeId) =>{
    return httpCommon.get(`/employee/employees/${employeeId}`)
}
const putEmployee = (data) =>{
    return httpCommon.post('employee/employees', data)
}

const deleteEmployee = (employeeId)=>{
    return httpCommon.delete(`/employee/employees/${employeeId}`)
}

export default {getEmployees, postEmployees, getEmployee, putEmployee, deleteEmployee};