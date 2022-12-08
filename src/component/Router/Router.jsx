import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../Login/LogIn";
import SignUp from "../SignUp/SignUp";
import EditProject from "../EditProject/EditProject";
import Home from "../Home/Home";
import AddProject from "../AddProject/AddProject";
import EmployeesList from "./../Employees/EmployeesList";
import ProjectList from "../ProjectList/ProjectList";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editproject/:id" element={<EditProject />} />
          <Route path="/addprojects" element={<AddProject />} />
          <Route path="/employeeslist" element={<EmployeesList />} />
          <Route path="/projectlist" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
