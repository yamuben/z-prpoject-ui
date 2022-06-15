/* eslint-disable no-unused-vars */
import axios from "axios";
import store from "store";
import "dotenv/config";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const resolve = (response) => {
  const { data } = response;
  return { ...response, data: undefined, body: data };
};

const reject = (error) => {
  const { data } = error.response || {};
  const message = data.message || error.message;
  if (data.status === 401) {
    store.remove("x-auth-token");
    return;
  }
  // notification.error({
  //   message: `Error`,
  //   description: message,
  // });
  return (
    <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    {message}
  </Alert>
  );
};

const instance = axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: "https://50.116.19.85:9090/vruum/auth/api/v1",
  baseURL: "http://localhost:8080/api/v1/user",
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": `${store.get("x-auth-token")}`,
  },
  timeout: 10000,
  responseType: "json",
  validateStatus: (status) => status < 400,
});

instance.interceptors.response.use(resolve, reject);

export default instance;
