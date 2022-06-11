import React from "react";
import "./index.css"
import { ListItemText, Stack, Button, Typography, Box } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
const UserInfos = ({ data }) => {
  return (
    <Box className="slide" sx={{ width: ["", "350px", "500px"] }}>
      <Stack spacing={2} width="100%">
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.gender}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Gender
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.maritalStatus}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Marital Status
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.age}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Age
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.dateOfBirth}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Date Of Birth
            </Typography>
          }
        />
        
      </Stack>
    </Box>
  );
};

export default UserInfos;
