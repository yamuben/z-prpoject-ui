import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import "./index.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { notification } from "antd";

import { checkEmail, signinUser } from "./redux/actions/auth";

import Box from "@mui/material/Box";
import { Paper, Button, Typography, TextField } from "@mui/material";
import logo from "./assets/zlogo.png";

const Home = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [nextInput, setNextInput] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });

  const { loading, status, email } = useSelector(({ auth }) => auth.email);
  const { signin } = useSelector(({ auth }) => auth);
  const verifyEmail = (data) => {
    checkEmail(data)(dispatch);
  };
  useEffect(() => {
    if (signin?.status == 200) {
      history.push("/auth");
    }
    if (status === 200) {
      setNextInput(1);
    } else {
      console.log("*******");
      return notification.error({ message: "User not registered!" });
    }
  }, [status,signin?.status]);
  const loginUser = (data) => {
    signinUser(data)(dispatch);
  };

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
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            setNextInput(0);
          }}
        />

        <Typography variant="h5" component="p">
          Signin
        </Typography>

        {!status ? (
          <>
            {/* <Input  placeholder="email" /> */}

            <TextField
              autoFocus={true}
              id="standard-basic"
              label="Email"
              variant="standard"
              value={emailInput}
              required
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              sx={{ width: "70%" }}
            />
            <LoadingButton
              variant="contained"
              loading={loading}
              sx={{ width: "70%", marginTop: "15px" }}
              onClick={() => {
                verifyEmail({ email: emailInput });
              }}
            >
              {" "}
              Next
            </LoadingButton>
          </>
        ) : (
          <div className="signin-div">
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              sx={{ width: "100%" }}
            />
            <LoadingButton
              loading={signin?.loading}
              variant="contained"
              sx={{ width: "100%", marginTop: "15px" }}
              onClick={() => {
                loginUser({ email, password });
                // history.push("/auth");
              }}
            >
              {" "}
              Signin
            </LoadingButton>
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
