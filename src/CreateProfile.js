import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import "./index.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import { Paper, Button, Typography, TextField,Stack } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import logo from "./assets/zlogo.png";
import Autocomplete from "@mui/material/Autocomplete";

import countryCodes from "./assets/data/countryCodes.json";

const Home = () => {
  const history = useHistory();
  const [nextInput, setNextInput] = useState(0);
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
        <img src={logo} alt="logo" className="logo" onClick={()=>{history.push("/"); setNextInput(0)}} />

        <Typography variant="h5" component="p">
          Signup
        </Typography>
        <Stack spacing={1} width="100%" alignItems="center">

        <TextField
          id="standard-basic"
          label="Names"
          variant="standard"
          sx={{ width: "70%" }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ width: "70%" }}
        />
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          sx={{ width: "70%" }}
        />
      <FormControl variant="standard"  sx={{ width: "70%" }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </FormControl>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300,marginTop:1 }}
          options={countryCodes}
          autoHighlight
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
          sx={{ width: "70%" }}
        />

        <TextField
          id="standard-basic"
          label="Re-password"
          type="password"
          variant="standard"
          sx={{ width: "70%" }}
        />
        </Stack>
        <Button
          variant="contained"
          sx={{ width: "70%", marginTop: "15px" }}
          onClick={() => {
            // setNextInput(1);
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
        <Button sx={{ width: "60%", marginTop: "15px" }} onClick={()=>{history.push("/")}}>already have account</Button>
      </Paper>
    </div>
  );
};
export default Home;
