import { combineReducers } from "redux";
import { get as _get } from "lodash";

import {
  FLAG_IS_OTP_SENT,
  LOGOUT,
  SEND_OTP,
  VERIFY_OTP,
  REFRESH,
  LOGGED_IN_USER,
  SET_LOGIN_MODAL,
  ADD_USER_SERVICES,
  CREATE_SERVICE_PROFILE,
  GET_SERVICE_PROFILE,
  GET_USER_SERVICES,
  USER_SERVICES
} from "./types";
import { FAILURE, REQUEST, SET, SUCCESS, UNSET } from "../action";

const initialState = {
  isRefreshing: false,
  isFetching: false,
  isAuthenticated: false,
  loggedInUser: {},
  isOtpSent: false,
  showLoginModal: false
};

const initState = {
  isLoading: false,
  isLoaded: false,
  isSaving: false,
  isSaved: false,
}

const users = () => {
  const auth = (state = initialState, action) => {
    switch (action.type) {

      case REFRESH[REQUEST]: return { ...state, isRefreshing: true }
      case REFRESH[SUCCESS]: return { ...state, isRefreshing: false }

      case REFRESH[FAILURE]:
      case LOGOUT[SUCCESS]: return { ...state, isFetching: false, isAuthenticated: false, isOtpSent: false, isRefreshing: false };

      case SEND_OTP[REQUEST]: return { ...state, isOtpSent: false, isOtpSending: true }
      case SEND_OTP[FAILURE]:
      case FLAG_IS_OTP_SENT[UNSET]: return { ...state, isOtpSent: false, isOtpSending: false }

      case SEND_OTP[SUCCESS]: return { ...state, isOtpSent: true, isOtpSending: false }

      case LOGGED_IN_USER[SET]: return { ...state, isFetching: false, loggedInUser: action.data, isAuthenticated: true, isOtpSent: false }
      case VERIFY_OTP[REQUEST]: return { ...state, isLoggingIn: true }
      case VERIFY_OTP[SUCCESS]: return { ...state, isFetching: false, loggedInUser: { ...action.payload, time: new Date() }, isAuthenticated: true, isOtpSent: false, isLoggingIn: false }
      case VERIFY_OTP[FAILURE]: return { ...state, isLoggingIn: false }

      case SET_LOGIN_MODAL[SET]: return { ...state, showLoginModal: true }
      case SET_LOGIN_MODAL[UNSET]: return { ...state, showLoginModal: false }

      case CREATE_SERVICE_PROFILE[REQUEST]: return { ...state, isFetching: true }
      case CREATE_SERVICE_PROFILE[SUCCESS]: return { ...state, isFetching: false }
      case CREATE_SERVICE_PROFILE[FAILURE]: return { ...state, isFetching: false }

      case GET_SERVICE_PROFILE[REQUEST]: return { ...state, isFetching: true }
      case GET_SERVICE_PROFILE[SUCCESS]: return { ...state, isFetching: false, profile: action.payload }
      case GET_SERVICE_PROFILE[FAILURE]: return { ...state, isFetching: false }

      default: return state;
    }
  };

  const services = (state = initState, action) => {
    switch (action.type) {
      case ADD_USER_SERVICES[REQUEST]: return { ...state, isSaving: true }
      case ADD_USER_SERVICES[SUCCESS]: return { ...state, isSaving: false, isSaved: true }
      case ADD_USER_SERVICES[FAILURE]: return { ...state, isSaving: false }
      case USER_SERVICES[SET]: return { ...state, isSaved: false }

      case GET_USER_SERVICES[REQUEST]: return { ...state, isLoading: true }
      case GET_USER_SERVICES[SUCCESS]: return { ...state, isLoading: false, isLoaded: true, data: action.payload }
      case GET_USER_SERVICES[FAILURE]: return { ...state, isLoading: false }

      default: return state;
    }
  }

  return combineReducers({
    services,
    auth,
  });
};

export default users;