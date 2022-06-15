import React from "react";
import "./index.css";
import { ListItemText, Stack, Button, Typography, Box } from "@mui/material";
import nidDocument from "../assets/nid.jpeg";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import PendingIcon from "@mui/icons-material/Pending";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const IdentityInfos = ({ data }) => {
  return (
    <Box className="slide" sx={{ width: ["", "350px", "500px"] }}>
      <Stack spacing={2} width="100%">
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data?.nationality}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Country / Nationality
            </Typography>
          }
        />
        <ListItemText
          primary={
            <Typography variant="h6" component="p">
              {data?.nid}
            </Typography>
          }
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              National / Passport ID
            </Typography>
          }
        />
        <ListItemText
          primary={<img src={nidDocument} width="100%" alt="Attach" />}
          secondary={
            <Typography variant="h7" component="p" sx={{ color: "#575050" }}>
              Attachment{" "}
              {data?.statusVerification === "verified" ? (
                <Tooltip title="Verified.">
                  <CheckCircleIcon sx={{color:"green"}} />
                </Tooltip>
              ) : (
                <Tooltip title="Verified.">
                  <PendingIcon />
                </Tooltip>
              )}
            </Typography>
          }
        />
      </Stack>
    </Box>
  );
};

export default IdentityInfos;
