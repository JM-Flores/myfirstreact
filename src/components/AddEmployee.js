import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = () =>{

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    const saveEmployee = (e) =>{
        e.preventDefault();

        const employee = {employeeId, name, location, department}

        if(employeeId){
            employeeService.postEmployees(employee)
            .then(response =>{
                console.log("employee updated!");
                navigate("/employees");
                
            })
            .catch(error =>{
                    console.log("something went wrong!")
            })
        }
        else{
            employeeService.postEmployees(employee)
            .then(response =>{
                console.log("employee added!");
                navigate("/employees");
                
            })
            .catch(error =>{
                    console.log("something went wrong!")
            })
        }  
    }

    
    useEffect(() =>{
            if(employeeId){
                employeeService.getEmployee(employeeId)
                .then(response =>{
                    setName(response.data.name);
                    setLocation(response.data.location);
                    setDepartment(response.data.department);
                    document.getElementById("name").defaultValue = response.data.name;
                    document.getElementById("location").defaultValue = response.data.location;
                    document.getElementById("department").defaultValue = response.data.department;
                })
                .catch(error =>{
                    console.log("something went wrong!", error)
                })
            }
        },[]
    )

    return(
        <div className="container">
            <h3>Add employee</h3>
            <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="Input employee name"
                onChange={
                    (e) => setName(e.target.value)
                }/>
            </div>
            <div class="mb-3">
                <label for="location" class="form-label">Location</label>
                <input 
                type="text" 
                class="form-control" 
                id="location" 
                placeholder="Input employee location"
                onChange={
                    (e) => setLocation(e.target.value)
                }/>
            </div>
            <div class="mb-3">
                <label for="department" class="form-label">Department</label>
                <input 
                type="text" 
                class="form-control" 
                id="department" 
                placeholder="Input employee department"
                onChange={
                    (e) => setDepartment(e.target.value)
                }/>
            </div>

            <button type="submit" class="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
        </div>
    )
}
export default AddEmployee