import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { ContentCutOutlined } from "@mui/icons-material";
import Edit from "./Edit";

function Noticeboard() {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { login_user } = state;

  function handleLogout() {
    const remove_item = localStorage.removeItem("authenticated");

    navigate("/login");
  }

  function handleEdit() {
    // const edit_item = getData;
    // console.log("=====>", edit_item);
    navigate("/Edit", { state: {edititem: getData } });
    
  }

  const getData = JSON.parse(localStorage.getItem("userlogin"));
  console.log("===========>", getData);
  console.log(getData.firstname);

  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Firstname</TableCell>
                <TableCell align="left">Lastname</TableCell>
                <TableCell align="left">Email </TableCell>
                <TableCell align="left">Password </TableCell>
                <TableCell align="left">File </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {/* <TableCell align="left">{login_user.firstname}</TableCell>
            <TableCell align="left">{login_user.lastname}</TableCell>
            <TableCell align="left">{login_user.email}</TableCell>
            <TableCell align="left">{login_user.password}</TableCell> */}
                {/* <Button
              onClick={handleLogout}
              variant="contained"
              type="submit"
              // style={btnStyle}
              fullWidth
            >
              LOGOUT
            </Button> */}
                {/* <img src={require("./upload_img/Screenshot (113).png")} /> */}
                {/* <TableCell align="left">{store_data .firstname}</TableCell>
            <TableCell align="left">{store_data .lastname}</TableCell>
            <TableCell align="left">{store_data .email}</TableCell>
            <TableCell align="left">{store_data .password}</TableCell>
            <img src={require("./upload_img/Screenshot (113).png")} />
            console.log(login_user.file) */}
              </TableRow>
              <TableRow>
                <TableCell align="left">{getData.firstname}</TableCell>
                <TableCell align="left">{getData.lastname}</TableCell>
                <TableCell align="left">{getData.email}</TableCell>
                <TableCell align="left">{getData.password}</TableCell>
                <Button
                  className="btn"
                  onClick={handleEdit}
                  variant="contained"
                  type="edit"
                  // style={btnStyle}
                  fullWidth
                >
                  EDIT
                </Button>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          className="btn"
          onClick={handleLogout}
          variant="contained"
          type="submit"
          // style={btnStyle}
        >
          LOGOUT
        </Button>
      </CardContent>
    </Card>
  );
}

export default Noticeboard;
