import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://planning-tool-for-an-office.onrender.com/register/login", {
      ...formData,
    });
    setFormData(response.data)
    //console.log(response);
    if (response) {
      localStorage.setItem("token", response.data);
      navigate("/home");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="box">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <span>
                    <strong>Email</strong>
                  </span>
                </div>
                <h1>
                  <TextField
                    className="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </h1>
                <div>
                  <span>
                    <strong>Password</strong>
                  </span>
                </div>
                <h1>
                  <TextField
                    className="password"
                    id="outLined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </h1>
                <Button type="submit" variant="contained">
                  Sing In
                </Button>
                &nbsp;
                <Link to="/signup"><Button variant="contained">
                  Sing Up
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
