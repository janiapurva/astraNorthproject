import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import "./confirm.css";

function Confirm() {
  const location = useLocation();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [confirmData, setConfirmData] = useState(location.state);
  const data = {
    id: parseInt(confirmData.id),
    ...confirmData,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    navigate(`/submission`);
  };
  const handlePreviousPage = () => {
    navigate(`/edit`, { state: confirmData });
  };
  return (
    <>
      <div className="full-layout">
        <h1>Review</h1>
        <div>
          {" "}
          {`${confirmData.firstName} ${confirmData.lastName} from  ${confirmData.country}   `}{" "}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h2>Details</h2>
          <div className="field">Gender:{confirmData.gender}</div>
          <div className="field">
            Full Address:
            {`${confirmData.address} ${confirmData.city} ${confirmData.state} ${confirmData.postalCode} ${confirmData.country}`}
          </div>
          <div className="field">Date of Birth:{confirmData.dateOfBirth}</div>
          <div className="field">Email: {confirmData.email}</div>
          <img className="field" src={`${confirmData.profilePicture}`} />
        </div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          style={{ marginRight: "1rem" }}
        >
          Submit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Are You sure you want to submit?
          </DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Dismiss</Button>
            <Button variant="contained" onClick={handleSubmit} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={handlePreviousPage}>Go back</Button>
      </div>
    </>
  );
}

export default Confirm;
