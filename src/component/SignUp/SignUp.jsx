import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobilenumber: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post(
      "https://planning-tool-for-an-office.onrender.com/register/signup",
      {
        ...formData,
      }
    );
    setFormData(formData);
    //console.log(response);
    if (response) {
      navigate("/");
    }
  };

  const handlecancel = (e) => {
    navigate("/signup");
  };
  return (
    <div className="bg-img">
      <div
        className="container"
        style={{
          justifyContent: "center",
          padding: "30px",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4">Register Yourself</Typography>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <TextField
              className="textfield"
              sx={{
                width: 300,
              }}
              id="standard-basic"
              label="First Name"
              required
              variant="standard"
              name="name"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              className="textfield"
              sx={{
                width: 300,
              }}
              id="standard-basic"
              label="Email"
              required
              variant="standard"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              className="textfield"
              sx={{
                width: 300,
              }}
              id="standard-basic"
              label="Password"
              required
              variant="standard"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              className="textfield"
              sx={{
                width: 300,
              }}
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              required
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <TextField
              className="textfield"
              sx={{
                width: 300,
              }}
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
              type="number"
              required
              min="10"
              max="10"
              name="mobilenumber"
              value={formData.mobilenumber}
              onChange={(e) =>
                setFormData({ ...formData, mobilenumber: e.target.value })
              }
            />
          </div>
          <br />
          <div>
            <Button
              style={{
                width: "120px",
                marginRight: "53px",
              }}
              variant="contained"
              onClick={(e) => handlecancel(e)}
            >
              Cancel
            </Button>
            <Button
              style={{
                width: "120px",
              }}
              variant="contained"
              type="submit"
            >
              {/* <Link to={"/"}> */}
              SignUp
              {/* </Link> */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
