import { combineReducers } from "redux";
import { get as _get } from "lodash";

import {
  FLAG_IS_OTP_SENT,
  LOGOUT,
  SEND_OTP,
  VERIFY_OTP,
  REFRESH,
  LOGGED_IN_USER,
  SET_LOGIN_MODAL
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

      case LOGGED_IN_USER[SET]: return { ...state, isFetching: false, loggedInUser: action.data , isAuthenticated: true, isOtpSent: false }
      case VERIFY_OTP[REQUEST]: return { ...state, isLoggingIn: true }
      case VERIFY_OTP[SUCCESS]: return { ...state, isFetching: false, loggedInUser: { ...action.payload, time: new Date() }, isAuthenticated: true, isOtpSent: false, isLoggingIn: false }
      case VERIFY_OTP[FAILURE]: return { ...state, isLoggingIn: false }

      case SET_LOGIN_MODAL[SET]:  return { ...state, showLoginModal: true }
      case SET_LOGIN_MODAL[UNSET]: return { ...state, showLoginModal: false }

      default: return state;
    }
  };

  return combineReducers({
    auth,
  });
};

export default users;