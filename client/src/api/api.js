import { useState } from "react";
import Axios from "axios";

function api() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState(0);
  const [newSalary, setNewSalary] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      first_name: firstName,
      last_name: lastName,
      age: age,
      location: location,
      title: title,
      salary: salary,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          first_name: firstName,
          last_name: lastName,
          age: age,
          location: location,
          title: title,
          salary: salary,
        },
      ]);
    });
  };

  const updateEmployeeSalary = (id) => {
    Axios.put("http://localhost:3001/update", {
      salary: newSalary,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((employee) => {
          return employee.id == id
            ? {
                id: employee.id,
                first_name: employee.first_name,
                last_name: employee.last_name,
                location: employee.location,
                age: employee.age,
                title: employee.title,
                salary: newSalary,
              }
            : employee;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((employee) => {
          return employee.id != id;
        })
      );
    });
  };

  return;
  <div></div>;
}

export default api;
