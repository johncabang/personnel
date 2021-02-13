import "./App.css";
import { useState } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import DataTable from "./components/DataTable";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";

function App() {
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

  const updateEmployeesalary = (id) => {
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
          return employee.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="information">
        <AddEmployee
          addEmployee={addEmployee}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setTitle={setTitle}
          setLocation={setLocation}
          setAge={setAge}
          setSalary={setSalary}
        />
      </div>
      <div className="employees">
        {/* <button onClick={getEmployees}>Show Employees</button> */}
        <div style={{ textAlign: "center", marginTop: 20, marginBottom: 40 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<KeyboardArrowDownIcon />}
            onClick={getEmployees}
            style={{ borderRadius: 25 }}
          >
            Show Employees
          </Button>
        </div>

        {/* {employeeList.map((employee, key) => {
          return (
            <div className="employee" key={key}>
              <div>
                <h3>First Name: {employee.first_name}</h3>
                <h3>Last Name: {employee.last_name}</h3>
                <h3>Age: {employee.age}</h3>
                <h3>Location: {employee.location}</h3>
                <h3>Title: {employee.title}</h3>
                <h3>Salary: {employee.salary}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="update new salary..."
                  onChange={(event) => {
                    setNewSalary(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeesalary(employee.id);
                  }}
                >
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(employee.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })} */}
        <DataTable employeeList={employeeList} />
      </div>
    </div>
  );
}

export default App;
