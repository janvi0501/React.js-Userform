import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
var pushData = [];
let i = 0;

function Edit() {
  //const { state } = useLocation();
  //const { getData } = state;
  const navigate = useNavigate();

  const [editfirstname, setEditfirstname] = useState("");
  const [editlastname, setEditlastname] = useState("");
  //const [editemail, setEditemail] = useState("");
  const [editpassword, setEditpassword] = useState("");

  var info = {
    firstname: editfirstname,
    lastname: editlastname,
    // email: editemail,
    password: editpassword,
  };

  function replaceData() {
    const getData = JSON.parse(localStorage.getItem("userlogin"));
    console.log("replace", getData);

    pushData.push(getData);
    console.log("***********", pushData[i].email);
    console.log("##############", getData);

   
      const main_Data = pushData.map(item => {
        if(edititem.email === item.email) {
            console.log("**",)
            return { email:edititem.email, editfirstname, editlastname, editpassword}
        }
      
        return item;
    }
      )
      console.log("=====>", main_Data )
      localStorage.setItem("loginuser", JSON.stringify(main_Data));
      //navigate('/', {state : {getData : main_Data}});
        
    }

    //   const pushdlt = localStorage.setItem("userlogin",pushRef)
    //   console.log(pushdlt)

    //   const replace_data = pushRef.map((el) => {
    //     return pushRef.email===editemail.email;
    //   })
    //  console.log(replace_data)
    //   else{
    // const replace_data = localStorage.setItem("key",JSON.stringify(getData) )
    // console.log("===============>", replace_data)
    //   }
    //console.log(pushData)
  
  const { state } = useLocation();
  const { edititem } = state;
  console.log(edititem);
  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button
          //onClick={saveData}
          variant="contained"
          type="submit"
          onClick={replaceData}
          // style={btnStyle}
        >
          SUBMIT
        </Button>
      </CardActions>
    </Card>
  );
}

export default Edit;
