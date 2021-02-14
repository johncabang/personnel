import { useState } from "react";
import { EmployeeProvider } from "./components/EmployeeContext";

import Axios from "axios";
import "./App.css";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DataTable from "./components/DataTable";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
import DeleteMenu from "./components/DeleteMenu";
import UpdateMenu from "./components/UpdateMenu";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState(0);
  const [newSalary, setNewSalary] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  // const getEmployees = () => {
  //   Axios.get("http://localhost:3001/employees").then((response) => {
  //     setEmployeeList(response.data);
  //   });
  // };

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

  return (
    <EmployeeProvider>
      <div
        style={{
          backgroundColor: "#ECEBEB",
          height: "100%",
        }}
      >
        <Header />
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PersonAddIcon />}
            // onClick={addEmployee}
            style={{
              marginTop: 50,
              marginBottom: 50,
              marginLeft: "15%",
              borderRadius: 30,
              width: 200,
            }}
          >
            Add Employee
          </Button>

          {/* <AddEmployee
          addEmployee={addEmployee}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setTitle={setTitle}
          setLocation={setLocation}
          setAge={setAge}
          setSalary={setSalary}
        /> */}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* <div style={{ textAlign: "center", marginTop: 20, marginBottom: 40 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<KeyboardArrowDownIcon />}
            onClick={getEmployees}
            style={{ borderRadius: 30, width: 320 }}
          >
            Show Employee(s)
          </Button>
        </div> */}
          <DataTable
            employeeList={employeeList}
            setEmployeeList={setEmployeeList}
            updateEmployeeSalary={updateEmployeeSalary}
            deleteEmployee={deleteEmployee}
            DeleteMenu={DeleteMenu}
            UpdateMenu={UpdateMenu}
            setNewSalary={setNewSalary}
          />
        </div>
        {/* <EmployeeList /> */}
        <Footer />
      </div>
    </EmployeeProvider>
  );
}

export default App;
