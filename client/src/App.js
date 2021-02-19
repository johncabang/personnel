import { Route, Switch } from "react-router-dom";

import { EmployeeProvider } from "./components/EmployeeContext";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AddEmployee from "./components/AddEmployee";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <EmployeeProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/addemployee" component={AddEmployee} />
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </EmployeeProvider>
    </div>
  );
}

export default App;
