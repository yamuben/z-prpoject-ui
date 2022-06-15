import { notification } from "antd";

import {
  DATA_IS_LOADING,
  GET_ALL_STATS,
  GET_ALL_STATS_FAILED,
  GET_ALL_DRIVERS,
  GET_ALL_DRIVERS_LOADING,
  GET_ALL_DRIVERS_FAILED,
  GET_ALL_RIDERS,
  GET_ALL_RIDERS_LOADING,
  GET_ALL_RIDERS_FAILED,
  GET_ALL_TRIPS,
  GET_ALL_TRIPS_LOADING,
  GET_ALL_TRIPS_FAILED,
} from "../../actionTypes";

import adminServices from "../../../services/adminServices";

// STATS SERVICES

export const getAllStatsAction = (payload) => async (dispatch) => {
  dispatch({ type: DATA_IS_LOADING, payload: { loading: true } });

  try {
    const stats = await adminServices.getAllStats(payload);
    if (stats?.status === 200) {
      dispatch({ type: DATA_IS_LOADING, payload: { loading: false } });

      dispatch({ type: GET_ALL_STATS, payload: stats?.body });

      //   notification.success({ message: "done well" });
    } else {
      window.location.reload();
      notification.error({ message: "Failed get data!" });
      dispatch({
        type: GET_ALL_STATS_FAILED,
        payload: { status: stats.status },
      });
    }
    dispatch({ type: DATA_IS_LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_STATS_FAILED,
      payload: { status: 500 },
    });
    dispatch({ type: DATA_IS_LOADING, payload: { loading: false } });
  }
};

// DRIVERS SERVICES
export const getAllDrivers = (payload) => async (dispatch) => {
  dispatch({ type: GET_ALL_DRIVERS_LOADING, payload: { loading: true } });

  try {
    const drivers = await adminServices.getAllDrivers(payload);
    if (drivers?.status === 200) {
      dispatch({ type: GET_ALL_DRIVERS_LOADING, payload: { loading: false } });

      dispatch({ type: GET_ALL_DRIVERS, payload: drivers?.body });

      //   notification.success({ message: "done well" });
    } else {
      notification.error({ message: "Failed get data!" });
      dispatch({
        type: GET_ALL_DRIVERS_FAILED,
        payload: { status: drivers.status },
      });
    }
    dispatch({ type: GET_ALL_DRIVERS_LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_DRIVERS_FAILED,
      payload: { status: 500 },
    });
    dispatch({ type: GET_ALL_DRIVERS_LOADING, payload: { loading: false } });
  }
};

// RIDERS SERVICES
export const getAllRiders = (payload) => async (dispatch) => {
  dispatch({ type: GET_ALL_RIDERS_LOADING, payload: { loading: true } });

  try {
    const riders = await adminServices.getAllRiders(payload);
    if (riders?.status === 200) {
      dispatch({ type: GET_ALL_RIDERS_LOADING, payload: { loading: false } });

      dispatch({ type: GET_ALL_RIDERS, payload: riders?.body });

        notification.success({ message: "done well" });
    } else {
      notification.error({ message: "Failed get data!" });
      dispatch({
        type: GET_ALL_RIDERS_FAILED,
        payload: { status: riders.status },
      });
    }
    dispatch({ type: GET_ALL_RIDERS_LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_RIDERS_FAILED,
      payload: { status: 500 },
    });
    dispatch({ type: GET_ALL_RIDERS_LOADING, payload: { loading: false } });
  }
};


// TRIPS SERVICES
export const getAllTripsAction = (payload) => async (dispatch) => {
  dispatch({ type: GET_ALL_TRIPS_LOADING, payload: { loading: true } });

  try {
    const trips = await adminServices.getAllTrips(payload);
    if (trips?.status === 200) {
      dispatch({ type: GET_ALL_TRIPS_LOADING, payload: { loading: false } });

      dispatch({ type: GET_ALL_TRIPS, payload: trips?.body });

      //   notification.success({ message: "done well" });
    } else {
      notification.error({ message: "Failed get data!" });
      dispatch({
        type: GET_ALL_TRIPS_FAILED,
        payload: { status: trips.status },
      });
    }
    dispatch({ type: GET_ALL_TRIPS_LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_TRIPS_FAILED,
      payload: { status: 500 },
    });
    dispatch({ type: GET_ALL_TRIPS_LOADING, payload: { loading: false } });
  }
};
