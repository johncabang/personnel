import { BrowserRouter as Router, Route } from "react-router-dom";

import { EmployeeProvider } from "./components/EmployeeContext";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <EmployeeProvider>
      <Header />
      <Router>
        <div className="App">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/login" exact render={() => <Login />} />
          {/* <AddEmployee />
          <EmployeeList /> */}
        </div>
      </Router>
      <Footer />
    </EmployeeProvider>
  );
}

export default App;
