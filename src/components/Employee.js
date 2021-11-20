import { useEffect, useState } from "react";
import employeeService from "../services/employeeService"

const Employee = () =>{

    const[employees, setEmployees] = useState([])

    useEffect(()=>{
        employeeService.getEmployees()
        .then(
            response => {
                setEmployees(response.data);
            }    
        )
        .catch(
            () =>{
                console.log("something went wrong")
            }
        )
    })

    return(
        <div>
            <h3>List of Employees</h3>
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>
                        )
                    )
                }
           </table>
        </div>
    )
}

export default Employee;