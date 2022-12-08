import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const params = useParams();
  //console.log(params);
  const [editedData, setEditedData] = useState({
    _id: "",
    id: "",
    image: "",
    projectName: "",
    price: "",
    status: "",
    startingDate: "",
    endingDate: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    async function Apidata() {
      console.log(params.id);
      const response = await axios.get(
        `http://localhost:5000/project/get/${params.id}`
      );
      // setGet(response.data);
      console.log(response.data[0]);
      setEditedData(response.data[0]);
    }
    Apidata();
  }, [params.id]);

  const navigate = useNavigate();
  const validateForm = (formData) => {
    var errors = {};
    if (formData.projectName === "")
      errors.projectName = "projectName is Required";
    if (formData.price === "") errors.price = "price is Required";
    if (formData.startingDate === "")
      errors.startingDate = "startingDate is Required";
    return errors;
  };
  const handleSubmit = async (formData) => {
    //console.log(params.id);

    const response = await axios.put(
      `https://planning-tool-for-an-office.onrender.com/update/${params.id}`,
      {
        ...data,
      }
    );
    console.log(response.data.value);
    //setData(response.data.value);
    //console.log([...data]);
    let users = [...data];
    let index = data.findIndex((row) => row.id === editedData.id);
    users[index] = response.data.value;
    setData(users[index]);
    if (response) {
      navigate("/home");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={editedData}
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
                    type="text"
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
                    type="text"
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
                    type="text"
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
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    type="button"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </Box>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
