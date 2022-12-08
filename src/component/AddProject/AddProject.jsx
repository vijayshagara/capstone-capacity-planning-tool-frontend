import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddProject.css";

const AddProject = () => {
  const navigate = useNavigate();
  const validateForm = (formData) => {
    var errors = {};
    if (formData.projectName === "")
      errors.projectName = "projectName is Required";
    if (formData.price === "") errors.price = "price is Required";
    if (formData.startingDate === "")
      errors.startingDate = "startingDate is Required";
    if (formData.endingDate === "")
      errors.endingDate = "endingDate is Required";
    if (formData.status === "") errors.status = "status is Required";
    return errors;
  };
  const handleSubmit = async (formData, { resetForm }) => {
    console.log(formData);
    resetForm();
    const response = await axios.post(`https://planning-tool-for-an-office.onrender.com/project/create`, {
      projectName: formData.projectName,
      price: formData.price,
      startingDate: formData.startingDate,
      endingDate: formData.endingDate,
      status: formData.status,
    });
    console.log(response.data);
    navigate("/home");
  };
  return (
    <div className="col-lg-12" id="addproject">
      <Formik
        initialValues={{
          projectName: "",
          price: "",
          startingDate: "",
          endingDate: "",
        }}
        validate={(formData) => validateForm(formData)}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Box
            
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="projectName"
              label="projectName"
              variant="standard"
              name="projectName"
              value={values.projectName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.projectName && errors.projectName}
            </span>
            <br />
            <TextField
              id="price"
              label="price"
              variant="standard"
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.price && errors.price}
            </span>
            <br />
            <TextField
              id="startingDate"
              type="startingDate"
              label="startingDate"
              variant="standard"
              name="startingDate"
              value={values.startingDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.startingDate && errors.startingDate}
            </span>
            <br /> <br />
            <TextField
              id="endingDate"
              type="endingDate"
              label="endingDate"
              variant="standard"
              name="endingDate"
              value={values.endingDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.endingDate && errors.endingDate}
            </span>
            <br /> <br />
            <TextField
              id="status"
              type="status"
              label="status"
              variant="standard"
              name="status"
              value={values.status}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <span style={{ color: "red" }}>
              {touched.status && errors.status}
            </span>
            <br /> <br />
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button variant="contained" type="button" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default AddProject;
