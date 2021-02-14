import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const EmployeeContext = createContext();

export function EmployeeProvider(props) {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  return (
    <EmployeeContext.Provider value={[employeeList, setEmployeeList]}>
      {props.children}
    </EmployeeContext.Provider>
  );
}
