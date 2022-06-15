import React, { useState, useEffect } from "react";

import { ListItemText, Stack, Button, Typography, Box } from "@mui/material";

import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import UserIdentity from "./RegisterIdentity"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AccountInfos = ({ data }) => {
  const [openModal, setOpenModal] = useState(true);
  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box className="slide" sx={{ width: ["", "350px", "500px"] }}>
        <Stack spacing={2} width="100%">
          <ListItemText
            primary={
              <Typography variant="h6" component="p">
                {data?.userAccount.email}
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
                {data?.userAccount.phone}
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
              data?.userAccount.statusVerification === "unverified" ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" component="p" sx={{ color: "red" }}>
                    Unverified{" "}
                    <Tooltip
                      title=" Kindly! Fill identity documents."
                      placement="right"
                    >
                      <InfoIcon sx={{ color: "#575050" }} />
                    </Tooltip>
                  </Typography>
                  <Button onClick={()=>{handleOpen()}}>Update Identity</Button>
                </Box>
              ) : data?.userAccount.statusVerification === "verified" ? (
                <Typography variant="h6" component="p" sx={{ color: "green" }}>
                  Verified
                  <Tooltip
                    title=" Your account is verified. Identity documents has been successfully checked."
                    placement="right"
                  >
                    <InfoIcon sx={{ color: "#575050" }} />
                  </Tooltip>
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: "#4e02b3" }}
                >
                  Pending
                  <Tooltip
                    title=" You've submitted your identity documents. Wait for checking.."
                    placement="right"
                  >
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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <UserIdentity/>
        </Box>
      </Modal>
    </>
  );
};

export default AccountInfos;
