import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import "./edit.css";

const Input = styled("input")({
  display: "none",
});
function Edit() {
  const steps = ["", ""];
  const location = useLocation();

  const { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const clients = useSelector((state) => state);
  const currentClient = clients.find((client) => client.id === parseInt(id));

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    profilePicture: null,
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (id) {
      return setState({
        firstName: currentClient.firstName,
        lastName: currentClient.lastName,
        email: currentClient.email,
        gender: currentClient.gender,
        dateOfBirth: currentClient.dateOfBirth,
        ProfilePicture: null,
        address: currentClient.address,
        city: currentClient.city,
        state: currentClient.state,
        postalCode: currentClient.postalCode,
        country: currentClient.country,
      });
    }
    setState(location.state);
    console.log(state);
  }, [currentClient, location, id]);

  const handleFirstName = (e) => {
    let firstName = e.target.value;

    setState((prevState) => ({
      ...prevState,
      firstName: firstName,
    }));
  };
  const handleLastName = (e) => {
    let lastName = e.target.value;

    setState((prevState) => ({
      ...prevState,
      lastName: lastName,
    }));
  };
  const handleAddress = (e) => {
    let address = e.target.value;

    setState((prevState) => ({
      ...prevState,
      address: address,
    }));
  };
  const handleCity = (e) => {
    let city = e.target.value;

    setState((prevState) => ({
      ...prevState,
      city: city,
    }));
  };
  const handleState = (e) => {
    let state = e.target.value;

    setState((prevState) => ({
      ...prevState,
      state: state,
    }));
  };
  const handleCountry = (e) => {
    let country = e.target.value;

    setState((prevState) => ({
      ...prevState,
      country: country,
    }));
  };
  const handlePostalCode = (e) => {
    let postalCode = e.target.value;

    setState((prevState) => ({
      ...prevState,
      postalCode: postalCode,
    }));
  };
  const handleEmail = (e) => {
    let email = e.target.value;

    setState((prevState) => ({
      ...prevState,
      email: email,
    }));
  };
  const handleGender = (e) => {
    let gender = e.target.value;

    setState((prevState) => ({
      ...prevState,
      gender: gender,
    }));
  };
  const handleDOB = (e) => {
    let dob = e.target.value;
    console.log(dob);

    setState((prevState) => ({
      ...prevState,
      dateOfBirth: dob,
    }));
  };

  const data = {
    id: parseInt(id),
    ...state,
  };
  const handlePicture = (e) => {
    let picture = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      profilePicture: picture,
    }));
  };
  const fileUploadHandler = () => {};

  const handleSubmit = (e) => {
    navigate(`/confirm`, { state: data });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 4, width: "25ch" },
        }}
        autoComplete="off"
      >
        <div className="main">
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>{<StepLabel>{""}</StepLabel>}</Step>
            ))}
          </Stepper>
          <h2>Client Details </h2>
          <div>
            <TextField
              id="outlined-required"
              label="First Name"
              value={state.firstName}
              onChange={handleFirstName}
            />
            <TextField
              id="outlined-disabled"
              label="Last Name"
              value={state.lastName}
              onChange={handleLastName}
            />

            <TextField
              id="outlined-number"
              label="Email Address"
              value={state.email}
              onChange={handleEmail}
            />
            <FormControl style={{ marginTop: "2rem" }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={state.gender}
                onChange={handleGender}
              >
                <FormControlLabel
                  value={"female"}
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              inputFormat="YYYY/MM/DD"
              type="date"
              label="Date of Birth (MM-DD-YYYY)"
              value={state.dateOfBirth}
              onChange={handleDOB}
            />

            <TextField
              id="outlined-search"
              label="Address(StreetNumber, Street Name)"
              value={state.address}
              onChange={handleAddress}
            />
            <TextField
              id="outlined-search"
              label="City"
              value={state.city}
              onChange={handleCity}
            />
            <TextField
              id="outlined-search"
              label="State"
              value={state.state}
              onChange={handleState}
            />
            <TextField
              id="outlined-search"
              label="Postal Code"
              value={state.postalCode}
              onChange={handlePostalCode}
            />
            <TextField
              id="outlined-search"
              label="Country"
              value={state.country}
              onChange={handleCountry}
            />
          </div>
          <input type="file" onChange={handlePicture} className="picture" />
          <button onClick={fileUploadHandler}>Upload</button>
        </div>
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ marginTop: "5rem", marginRight: "1rem", marginLeft: "30rem" }}
      >
        Next
      </Button>
    </>
  );
}

export default Edit;
