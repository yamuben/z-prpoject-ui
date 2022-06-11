import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import AccountInfos from "../../components/AccountInfos";
import UserInfos from "../../components/UserInfos";
import IdentityInfos from "../../components/Identity";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./homeUser.css";
import pic from "../../assets/pic.jpg";

import data from "../../assets/data/user.json";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeUser = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Box sx={{ width: "100%", minHeight:"80vh",position: "relative"}} className="profile-container">
        <Box sx={{ width: "100%" }} className="profile-container">
          <img src={pic} alt="Profile" className="profile-pic" />
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box
            sx={{
              minHeight: "50vh",
              minWidth: "50%",
              background: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Account Infos" />
              <Tab label="User Infos" />
              <Tab label="Identity" disabled={data.statusVerification==="unverified"? true:false }/>
            </Tabs>

            <TabPanel value={value} index={0} sx={{ width:"900px"}}>
              <AccountInfos data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <UserInfos data={data} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <IdentityInfos data={data} />
            </TabPanel>
          </Box>
        </Box>
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default HomeUser;
