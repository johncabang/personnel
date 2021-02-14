import React from "react";
import AddEmployee from "../../components/AddEmployee";
import EmployeeList from "../../components/EmployeeList";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default Home;
