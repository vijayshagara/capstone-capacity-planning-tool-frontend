import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(`https://planning-tool-for-an-office.onrender.com/project/get`);
      //console.log(response.data);
      setBookData(response.data);
    };
    getdata();
  }, []);
  const handleDelete = async (e, id) => {
    console.log(id);
    const response = await axios.delete(
      `https://planning-tool-for-an-office.onrender.com/project/delete/${id}`
    );
    const data = bookData.filter((row) => row.id !== response.data.id);
    setBookData(data);
  };
  const handleEdit = (id) => {
    /* const data = bookData.find((row) => row.id == id);
    setData(data); */
    console.log(id);
    navigate(`/editproject/${id}`);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Headers />
            </div>
            <div>
              <div className="card" id="homecard" style={{ width: "18rem", height: "5rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Project 5+</h5>
                  <Link className="card-link" to="/projectlist">Project List</Link>
                </div>
              </div>
              <div className="card" id="homecard" style={{ width: "18rem", height: "5rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Pending Task</h5>
                  <h6 className="card-link">3</h6>
                </div>
              </div>
              <div className="card" id="homecard" style={{ width: "18rem", height: "5rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Add Task 10+</h5>
                  <Link to="/addprojects" className="card-link">
                    Add project
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="uitable">
                <TableContainer id="hometable" component={Paper}>
                  <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontSize: "large" }}>Id</TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Project Title
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Price
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Intial Date
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Complete Date
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Status
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Edit Action
                        </TableCell>
                        <TableCell style={{ fontSize: "large" }} align="right">
                          Delete Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {bookData.map((row) => (
                        <TableRow
                          key={row._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.projectName}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">
                            {row.startingDate}
                          </TableCell>
                          <TableCell align="right">{row.endingDate}</TableCell>
                          <TableCell align="right">{row.status}</TableCell>
                          <TableCell align="right">
                            <Button onClick={() => handleEdit(row._id)}>
                              Edit
                            </Button>
                          </TableCell>
                          <TableCell align="right">
                            <Button onClick={(e) => handleDelete(e, row._id)}>
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
