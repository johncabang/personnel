import React, { useEffect } from "react";
import AddEmployee from "../../components/AddEmployee";
import EmployeeList from "../../components/EmployeeList";
import "./Home.css";

function Home() {
  // useEffect(() => {
  //   if (!localStorage.getItem("loggedIn")) {
  //     localStorage.setItem("loggedIn", false);
  //   }
  // }, []);

  return (
    <div className="Home">
      <AddEmployee />
      <EmployeeList />
    </div>
  );
}

export default Home;
