import React, { useState, useEffect } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload, Form } from "antd";
import "./index.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUserIdentity } from "../redux/actions/auth";
import { notification } from "antd";

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
import logo from "../assets/zlogo.png";

const Home = () => {
  const dispatch = useDispatch();
  const [docId, setDocId] = useState(null);
  const [docType, setDocType] = useState(null);
  const [docPicture, setDocPicture] = useState(null);

  const history = useHistory();

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (e?.fileList[0]?.response?.success) {
      setDocPicture(e?.fileList[0]?.response?.secure_url);
    }
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const { newUser } = useSelector(({ auth }) => auth);
  // useEffect(() => {
  //   if (newUser?.status === 201) {
  //     history.push("/home");
  //   }
  // }, [newUser?.status]);
  const handleSubmit = () => {
    return {
      docId,
      docType,
      docPicture,
    };
  };

  return (
    // <div className="container">
    <Grid
      container
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} lg={12}>
        <Form.Item
          label="Upload Picture"
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
              {!docPicture ? (
                <>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined style={{ fontSize: "100px" }} />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Upload your ID/Passport Document (.JPEG,.png) Images
                  </p>
                </>
              ) : (
                <img src={docPicture} alt="user Picture" width="100%" />
              )}
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Grid>
      <Grid item xs={12} lg={12} spacing={1} alignItems="center">
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-label">
            Type Of Document
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={docType}
            label="Type Of Document"
            onChange={(e) => {
              setDocType(e.target.value);
            }}
          >
            <MenuItem value={"passport"}>Passport</MenuItem>
            <MenuItem value={"nationalId"}>National Identity</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Id"
          name="Id"
          value={docId}
          onChange={(e) => {
            setDocId(e.target.value);
          }}
          variant="standard"
          sx={{ width: "100%" }}
        />
        <Button
          variant="contained"
          sx={{ width: "100%", marginTop: "15px" }}
          onClick={() => {
            registerUserIdentity(handleSubmit())(dispatch);
          }}
        >
          Save
        </Button>
      </Grid>
    </Grid>
    // </div>
  );
};
export default Home;
