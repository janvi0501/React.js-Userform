import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
var pushData = [];
let i = 0;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Edit() {
  const [open, setOpen] = React.useState(true);
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  const { state } = useLocation();
  const { edititem } = state;
  console.log(edititem);
  const navigate = useNavigate();
  //const[updateitem, setUpdateitem] = useState( JSON.parse(localStorage.getItem("userlogin")))

  const [editfirstname, setEditfirstname] = useState("");
  const [editlastname, setEditlastname] = useState("");
  const [editemail, setEditemail] = useState("");
  const [editpassword, setEditpassword] = useState("");

  var info = {
    firstname: editfirstname,
    lastname: editlastname,
    email: edititem.email,
    password: editpassword,
  };

  function replaceData() {
    const getData = JSON.parse(localStorage.getItem("userlogin"));
    const information = JSON.parse(localStorage.getItem("Informations"));
    console.log(information);
    console.log("replace", getData);

    //pushData.push(getData);
    // console.log("***********", information [i].email);
    // console.log("##############", getData);

    if (getData.email === edititem.email) {
      localStorage.removeItem("userlogin");
      localStorage.setItem("userlogin", JSON.stringify(info));

      navigate("/");
    }

    // const main_Data = pushData.map(item => {
    //   if(edititem.email === item.email) {
    //       console.log("**",)
    //       return { email:edititem.email, editfirstname, editlastname, editpassword};
    //   }

    //   return item;

    // console.log("=====>", main_Data )
    // localStorage.setItem("loginuser", JSON.stringify(main_Data));
    // //const rcve = JSON.parse(localStorage.getItem(rcv))
    // //navigate('/', {state : {getData : main_Data}});
    // //setUpdateitem(JSON.parse(localStorage.getItem("loginuser")))
    // console.log("///////////////", localStorage.setItem("loginuser", JSON.stringify(main_Data)))

    // //navigate("/",  {state : {getData : main_Data}})
  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        //onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            //value={email}
            defaultValue={edititem.firstname}
            variant="standard"
            label="Firstname"
            placeholder="Enter Your firstname"
            onChange={(e) => {
              setEditfirstname(e.target.value);
            }}
          />
          <TextField
            //value={email}
            defaultValue={edititem.lastname}
            variant="standard"
            label="Lastname"
            placeholder="Enter Your lastname"
            onChange={(e) => {
              setEditlastname(e.target.value);
            }}
          />
          {/* <TextField
          //value={email}
          defaultValue={edititem.email}
          variant="standard"
          label="Email"
          
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEditemail(e.target.value);
          }}
        /> */}
          <TextField
            //value={email}
            defaultValue={edititem.password}
            variant="standard"
            label="Password"
            placeholder="Enter Your Password"
            onChange={(e) => {
              setEditpassword(e.target.value);
            }}
          />
          <Grid margin="13px 0px" align="right">
            <Button variant="contained" type="submit" onClick={replaceData}>
              SUBMIT
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
