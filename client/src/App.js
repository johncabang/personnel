import { EmployeeProvider } from "./components/EmployeeContext";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <EmployeeProvider>
      <div className="App">
        <Header />
        <AddEmployee />
        <EmployeeList />
        <Footer />
      </div>
    </EmployeeProvider>
  );
}

export default App;
