import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import "./index.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import { Paper, Button, Typography, TextField } from "@mui/material";
import logo from "./assets/zlogo.png";

const Home = () => {
  const history = useHistory();
  const [nextInput, setNextInput] = useState(0);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

  // if (!authState) {
  //   return <div>Loading authentication...</div>;
  // } else if (!authState.isAuthenticated) {
  //   return (
  //     <div>
  //       <button onClick={login}>Login</button>
  //     </div>
  //   );
  // } else {
  //   return "You authenticated bitch!";
  // }

  return (
    <div className="container">
      <Paper
        className="signin-card"
        elevation={3}
        sx={{
          width: ["95%", "70%", "30%"],
          minHeight: ["auto", "75%", "50%"],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "30px",
        }}
      >
        <img src={logo} alt="logo" className="logo" onClick={()=>{ setNextInput(0)}} />

        <Typography variant="h5" component="p">
          Signin
        </Typography>

        {nextInput == 0 ? (
          <>
            {/* <Input  placeholder="email" /> */}

            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e)=>{ setEmail(e.target.value)}}
              sx={{ width: "70%" }}
            />
            <Button
              variant="contained"
              sx={{ width: "70%", marginTop: "15px" }}
              onClick={() => {
                setNextInput(1);
              }}
            >
              {" "}
              Next
            </Button>
          </>
        ) : (
          <div className="signin-div">
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e)=>{ setPassword(e.target.value)}}
              sx={{ width: "100%" }}
            />
            <Button
              variant="contained"
              sx={{ width: "100%", marginTop: "15px" }}
              onClick={() => {
               history.push("/profile/user")
              }}
            >
              {" "}
              Signin
            </Button>
          </div>
        )}
        <Divider sx={{ width: "60%", marginTop: "10px" }}>
          <Chip label="Others" />
        </Divider>
        <Button
          sx={{ width: "60%", marginTop: "15px" }}
          variant="contained"
          onClick={login}
        >
          {" "}
          Login With OKTA{" "}
        </Button>
        <Button
          sx={{ width: "60%", marginTop: "15px" }}
          onClick={() => {
            history.push("/create/account");
          }}
        >
          Create Account
        </Button>
      </Paper>
    </div>
  );
};
export default Home;
