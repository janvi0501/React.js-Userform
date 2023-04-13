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
    const multipleUserData = JSON.parse(localStorage.getItem("Informations"));
    console.log(multipleUserData);
    console.log("replaceitem", getData);

    // const edit_user = multipleUserData.findIndex((el) => {
    //   console.log("========", el.email);
    //   if (edititem.email === el.email) {
    //     //if(i = 0, i<edititem.length, i++){
    //     console.log("check", edititem.email === el.email);
    //     const main_div = multipleUserData.map((firstname,lastname,email,password ) => {

    //         return {
    //           firstname: editfirstname,
    //           lastname: editlastname,
    //           email: edititem.email,
    //           password: editpassword,
    //         };

    //     });
    //     console.log("main_div", main_div);
    //   }
    // });

    const edit_user = multipleUserData.findIndex((el) => {
      return edititem.email === el.email;
    });
    console.log("edit_user", edit_user);

    const user_edit = multipleUserData.filter((el) => {
      console.log("========", el.email);
      return edititem.email === el.email;
    });
    console.log("user_edit", user_edit);

    const main_div = user_edit.map((firstname, lastname, email, password) => {
      return {
        firstname: editfirstname,
        lastname: editlastname,
        email: edititem.email,
        password: editpassword,
      };
    });
    console.log("main_div", main_div);
    multipleUserData[edit_user] = main_div[0]
    localStorage.setItem("Informations", JSON.stringify(multipleUserData))
    // const update_data = multipleUserData(el) = main_div
    // console.log("***********", update_data)
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
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            defaultValue={edititem.firstname}
            variant="standard"
            label="Firstname"
            placeholder="Enter Your firstname"
            onChange={(e) => {
              setEditfirstname(e.target.value);
            }}
          />
          <TextField
            defaultValue={edititem.lastname}
            variant="standard"
            label="Lastname"
            placeholder="Enter Your lastname"
            onChange={(e) => {
              setEditlastname(e.target.value);
            }}
          />

          <TextField
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
