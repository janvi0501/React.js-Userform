import React, { useState } from "react";
import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import { FormControlLabel, Checkbox, Button, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

var informations = [];

function Ragistartion() {
  const paperStyle = { padding: 40, width: 280, margin: "20px auto" };
  const avtarStyle = { backgroundColor: "purple" };
  const btnStyle = { margin: "15px 0px" };
  const navigate = useNavigate();
  const data_login = JSON.parse(localStorage.getItem("Informations"));
  const login_user = JSON.stringify(data_login);
  console.log(login_user);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  function saveData() {
    //console.log('saveData')

    var information = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      file: file,
    };

    if (firstname === "") {
      alert("Firstname field is requried!");
    } else if (lastname === "") {
      alert("Lastname field is requried");
    } else if (email === "") {
      alert("Email field is requried");
    } else if (!email.includes("@")) {
      alert("Please enter valid email addres");
    } else if (password === "") {
      alert("Password field is requried");
    } else if (password.length < 5) {
      alert("Password length greater five");
    } else {
      if (informations == "") {
        informations.push(information);
        console.log("Informations", informations);
        navigate("/", { state: { login_user: information } });
        localStorage.setItem("Informations", JSON.stringify(informations));
      } else {
        if (data_login) {
          const user_login = data_login.filter((el) => {
            return el.email === email && el.password === password;
          });
          // console.log(userlogin)
          if (user_login.length === 0) {
            informations.push(information);
            console.log("Informations", informations);
            console.log("Ragister Successfully");
            
            navigate("/");
            localStorage.setItem("Informations", JSON.stringify(informations));
          } else {
            alert("User already exists!");
          }
        }
      }
    }
  }
  // { state: { login_user: information } }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockIcon />
          </Avatar>
          <h2> Create a new account </h2>
        </Grid>
        <TextField
          label="Firstname"
          placeholder="Enter Your Firstname"
          variant="filled"
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          fullWidth
          required
        />
        <Grid margin="15px 0px">
          <TextField
            label="Lastname"
            placeholder="Enter Your Lastname"
            variant="filled"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            variant="filled"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid margin="15px 0px">
          <TextField
            type="file"
            // value={file}
            onChange={(e) => {
              setFile(e);
            }}
          />
        </Grid>

        {/* <FormControlLabel control={<Checkbox />} label="Remember me" /> */}
        <Button
          onClick={saveData}
          variant="contained"
          type="submit"
          style={btnStyle}
          fullWidth
        >
          SIGN IN
        </Button>
        <Typography>
          Already have an account ?<NavLink to="/login">Sign up</NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Ragistartion;
