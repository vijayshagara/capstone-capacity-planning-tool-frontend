import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Employees.css";

const EmployeesList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const getEmployee = async () => {
    const response = await axios.get("https://planning-tool-for-an-office.onrender.com/empolyee/get");
    setEmployeesList(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "40px",
          marginTop: "5px",
        }}
      >
        Empolyee List
      </h4>
      {employeesList.map((row) => {
        return (
          <Card
            className="employeecard"
            key={row._id}
            style={{
              width: "18rem",
              marginLeft: "150px",
              marginBottom: "50px",
            }}
          >
            <Card.Body>
              <Card.Title>{row.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {row.position}
              </Card.Subtitle>
              <h6>{row.emailId}</h6>
              <h6>EmployeeId:{row.id}</h6>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default EmployeesList;
