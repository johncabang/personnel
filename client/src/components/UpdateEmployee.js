export function updateEmployeeSalary(id) {
  const [newSalary, setNewSalary] = useState(0);

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
}
