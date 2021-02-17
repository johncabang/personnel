import { useState, useEffect } from "react";
import EmployeeList from "../../components/EmployeeList";
import Login from "../Login/Login";
import "./Home.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    // console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  return <div className="Home">{loggedIn ? <EmployeeList /> : <Login />}</div>;
}

export default Home;
