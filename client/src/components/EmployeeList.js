import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

import Employee from "./Employee";

function EmployeeList() {
  const [employeeList, setEmployeeList] = useContext(EmployeeContext);

  return (
    <div>
      {employeeList.map((employee) => (
        <Employee
          key={employee.id}
          first_name={employee.first_name}
          last_name={employee.last_name}
          title={employee.title}
          location={employee.location}
          age={employee.age}
          salary={employee.salary}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
