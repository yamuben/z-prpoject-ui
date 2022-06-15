import React, { useState, useEffect } from "react";
import "../index.css";
import { Paper, Button, Typography, TextField, Stack } from "@mui/material";
import logo from "../assets/zlogo.png";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signinUserWithOTP ,getUserProfile} from "../redux/actions/auth";

const OtpView = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { email } = useSelector(({ auth }) => auth.email);
  const { otpSignin } = useSelector(({ auth }) => auth);
  const [otpCode, setOtpCode] = useState("Z-");

  if (!email) {
    history.push("/");
  }
  useEffect(() => {
    if (otpSignin?.status === 200) {

    getUserProfile()(dispatch);
      history.push("/profile/user");
    }
  }, [otpSignin.status]);

  const loginUser = (data) => {
    signinUserWithOTP(data)(dispatch);
  };

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
        <Stack
          spacing={3}
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => {
              //   setNextInput(0);
            }}
          />

          <Typography variant="h5" component="p">
            Verify Your Account
          </Typography>
          <TextField
            readOnly={true}
            autoFocus={true}
            id="standard-basic"
            label="Verification Code"
            variant="standard"
            value={otpCode}
            onChange={(e) => {
              setOtpCode(e.target.value);
            }}
            sx={{ width: "50%", letterSpacing: "3px" }}
          />

          <LoadingButton
            variant="contained"
            loading={otpSignin?.loading}
            sx={{ width: "70%", marginTop: "15px" }}
            onClick={() => {
              loginUser({ email, otp: otpCode.split("-")[1] });
              // verifyEmail({ email: emailInput });
            }}
          >
            Confirm
          </LoadingButton>
        </Stack>
      </Paper>
    </div>
  );
};

export default OtpView;
