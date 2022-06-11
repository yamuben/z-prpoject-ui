import React from "react";

import { ListItemText, Stack,Button, Typography, Box } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
const AccountInfos = ({ data }) => {
  return (
    <Box className="slide" sx={{ width: ["", "350px", "500px"] }}>
      <Stack spacing={2} width="100%">
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.email}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Email
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data.phone}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Phone
            </Typography>
          }
        />
        <ListItemText
          primary={
            data.statusVerification === "unverified" ? (
              <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
              <Typography variant="h6" component="p" sx={{ color: "red" }}>
                Unverified{" "}
                <Tooltip title=" Kindly! Fill identity documents." placement="right">
                  <InfoIcon sx={{ color: "#575050" }} />
                </Tooltip>
              </Typography>
              <Button>Update Identity</Button>
              </Box>
            ) : data.statusVerification === "verified" ? (
              <Typography variant="h6" component="p" sx={{ color: "green" }}>
                Verified 
                <Tooltip title=" Your account is verified. Identity documents has been successfully checked." placement="right">
                  <InfoIcon sx={{ color: "#575050" }} />
                </Tooltip>
              </Typography>
            ) : (
              <Typography variant="h6" component="p" sx={{ color: "#4e02b3" }}>
                Pending 
                <Tooltip title=" You've submitted your identity documents. Wait for checking.." placement="right">
                  <InfoIcon sx={{ color: "#575050" }} />
                </Tooltip>
              </Typography>
            )
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Account Status
            </Typography>
          }
        />
        <Button>Update Password</Button>
      </Stack>
    </Box>
  );
};

export default AccountInfos;
