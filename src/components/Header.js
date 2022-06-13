import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {useHistory} from "react-router-dom";

import logo from "../assets/zlogo.png";
import "./header.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div className="header-container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            height: 70,
            width: ["0%", "50%", "60%"],
          }}
        >
          <img src={logo} height="90%" />
          <Typography className="logoText" sx={{ minWidth: 200,fontWeight:"800", }} variant="h4" component="p">ZCompany</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            height: 70,
            width: ["100%", "50%", "30%"],
            justifyContent: "flex-end",
          }}
        >
          {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
          <Typography sx={{ minWidth: 100 }}> Benjamin</Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Update Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{history.push("/")}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
