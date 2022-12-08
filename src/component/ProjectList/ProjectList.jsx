import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./ProjectList.css"

const ProjectList = () => {
  const [project, setProject] = useState([]);
  const getProject = async () => {
    const response = await axios.get("https://planning-tool-for-an-office.onrender.com/project/get");
    //console.log(response.data);
    setProject(response.data);
  };
  useEffect(() => {
    getProject();
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
        Project List
      </h4>
      {project.map((row) => {
        return (
          <Card key={row._id} id="projectcard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={row.image} style={{width:"285px",height:"200px"}} />
            <Card.Body>
              <Card.Title>{row.projectName}</Card.Title>
              <Card.Text>
                {row.status}
              </Card.Text>
              <Card.Text>
                {row.startingDate}
              </Card.Text>
              <Card.Text>
                {row.endingDate}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectList;
