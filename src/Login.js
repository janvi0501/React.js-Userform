import React, { useState } from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { FormControlLabel, Checkbox, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

var informations = [];

function Login() {
  const paperStyle = { padding: 30, width: 280, margin: "20px auto" };
  const navigate = useNavigate();
  const btnStyle = { margin: "15px 0px" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  function loginData() {
    //console.log('saveData')

    const loginuser = JSON.parse(localStorage.getItem("Informations"));
    console.log(loginuser);
    const login_user = JSON.stringify(loginuser);

    console.log(login_user);

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length greater five");
    } else {
      if (loginuser == null) {
        alert("You are not Ragister");
      } else {
        if (loginuser) {
          const user_login = loginuser.find((el) => {
            return el.email === email && el.password === password;
          });
          if (!user_login) {
            alert("invalid details");
          } else {
            console.log("Login successfully");

            console.log(user_login);

            setauthenticated(true);
            localStorage.setItem("authenticated", true);
            navigate("/");
            localStorage.setItem("userlogin", JSON.stringify(user_login));
          }
        }
      }
    }
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2> Login in </h2>
        </Grid>
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
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button
          onClick={loginData}
          variant="contained"
          type="submit"
          style={btnStyle}
          fullWidth
        >
          SUBMIT
        </Button>
        <Typography>
          Do you have an account ?<NavLink to="/ragistartion">Sign in</NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
