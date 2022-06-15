import React, { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload, Form } from "antd";
import "./index.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "./redux/actions/auth/index";
import { notification } from "antd";

import Box from "@mui/material/Box";
import {
  Paper,
  Button,
  Typography,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import logo from "./assets/zlogo.png";
import Autocomplete from "@mui/material/Autocomplete";

import countryCodes from "./assets/data/countryCodes.json";

const Home = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);
  const [gender, setGender] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [age, setAge] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [phone, setPhone] = useState(null);
  const [picture, setPicture] = useState(null);
  const [names, setNames] = useState(null);

  const history = useHistory();
  const [nextInput, setNextInput] = useState(0);
  const { authState, oktaAuth } = useOktaAuth();
  const login = () => oktaAuth.signInWithRedirect({ originalUri: "/profile" });
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (e?.fileList[0]?.response?.success) {
      setPicture(e?.fileList[0]?.response?.secure_url);
    }
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const { newUser } = useSelector(({ auth }) => auth);
  useEffect(() => {
    if (newUser?.status === 201) {
      history.push("/home");
    }
  }, [newUser?.status]);
  const handleSubmit = () => {
    if (password === rePassword) {
      return {
        names,
        email,
        password,
        gender,
        picture,
        dateOfBirth,
        age,
        nationality,
        maritalStatus,
        phone,
      };
    } else {
      return null;
    }
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
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container">
      <Paper
        className="signin-card"
        elevation={3}
        sx={{
          width: ["95%", "70%", "60%"],
          minHeight: ["auto", "75%", "50%"],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            history.push("/");
            setNextInput(0);
          }}
        />

        <Typography variant="h5" component="p">
          Signup
        </Typography>
        <Grid
          container
          style={{
            width: "70%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} lg={5}>
            <Form.Item
              label="Dragger"
              style={{
                background: "rgb(216, 216, 216)",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger
                  name="files"
                  action="http://localhost:8080/api/v1/user/image"
                >
                  {!picture ? (
                    <>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined style={{ fontSize: "100px" }} />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                      </p>
                    </>
                  ) : (
                    <img src={picture} alt="user Picture" width="70%" />
                  )}
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </Grid>
          <Grid item lg={1} xs={0}></Grid>
          <Grid item xs={12} lg={6} spacing={1} alignItems="center">
            <TextField
              id="standard-basic"
              label="Names"
              name="names"
              value={names}
              onChange={(e) => {
                setNames(e.target.value);
              }}
              variant="standard"
              sx={{ width: "100%" }}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ width: "100%" }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="Phone"
              variant="standard"
              sx={{ width: "100%" }}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <TextField
              id="standard-basic"
              label="Age"
              variant="standard"
              sx={{ width: "100%" }}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">
                Marital Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={maritalStatus}
                label="Gender"
                onChange={(e) => {
                  setMaritalStatus(e.target.value);
                }}
              >
                <MenuItem value={"single"}>Single</MenuItem>
                <MenuItem value={"married"}>Married</MenuItem>
                <MenuItem value={"divorced"}>Divorced</MenuItem>
                <MenuItem value={"widowed"}>Widowed</MenuItem>
              </Select>
            </FormControl>
            <Autocomplete
              id="country-select-demo"
              sx={{ width: "100%", marginTop: 1 }}
              options={countryCodes}
              // autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Choose a country"
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              sx={{ width: "100%" }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <TextField
              id="standard-basic"
              label="Re-password"
              type="password"
              variant="standard"
              sx={{ width: "100%" }}
              value={rePassword}
              required
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{ width: "70%", marginTop: "15px" }}
          onClick={() => {
            if (!handleSubmit()) {
              return notification.error({ message: "Failed register data!" });
            } else {
              signupUser(handleSubmit())(dispatch);
            }
          }}
        >
          {" "}
          Register
        </Button>
        <Divider sx={{ width: "60%", marginTop: "10px" }}>
          <Chip label="Others" />
        </Divider>
        <Button
          sx={{ width: "60%", marginTop: "15px" }}
          variant="contained"
          onClick={login}
        >
          {" "}
          Signup With OKTA{" "}
        </Button>
        <Button
          sx={{ width: "60%", marginTop: "15px" }}
          onClick={() => {
            history.push("/");
          }}
        >
          already have account
        </Button>
      </Paper>
    </div>
  );
};
export default Home;
