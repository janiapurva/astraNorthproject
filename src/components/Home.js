import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import "./home.css";
import reportWebVitals from "../reportWebVitals";

function Home() {
  const users = useSelector((state) => state);
  let navigate = useNavigate();

  function redirect(id) {
    navigate(`/edit/${id}`);
  }
  return (
    <>
      <div className="main">
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">DOB</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" onClick={() => redirect(row.id)}>
                    <span className="pointer">{`${row.firstName} ${row.lastName}`}</span>
                  </TableCell>
                  <TableCell align="left">{row.dateOfBirth}</TableCell>
                  <TableCell align="left">
                    <Tooltip title={row.email}>
                      <span
                        style={{
                          overFlow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "1rem",
                        }}
                      >
                        {row.email}
                      </span>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="left">{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Home;
