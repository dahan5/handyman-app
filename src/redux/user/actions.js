import {action, FAILURE, REQUEST, SET, SUCCESS, UNSET} from "../action";
import {
    FLAG_IS_OTP_SENT,
    LOGOUT,
    LOGGED_IN_USER,
    SEND_OTP,
    VERIFY_OTP,
    REFRESH,
    SET_LOGIN_MODAL
} from "./types";

export const logout = {
    request: data => action(LOGOUT[REQUEST], { data }),
    success: (data, response) => action(LOGOUT[SUCCESS], { data, response }),
    failure: (data, error) => action(LOGOUT[FAILURE], { data, error }),
};

export const refresh = {
    request: data => action(REFRESH[REQUEST], { data }),
    success: (data, response) => action(REFRESH[SUCCESS], { data, response }),
    failure: (data, error) => action(REFRESH[FAILURE], { data, error }),
};

export const sendOTP = {
    request: data => action(SEND_OTP[REQUEST], { data }),
    success: (data, response) => action(SEND_OTP[SUCCESS], { data, response }),
    failure: (data, error) => action(SEND_OTP[FAILURE], { data, error }),
};

export const verifyOTP = {
    request: data => action(VERIFY_OTP[REQUEST], { data }),
    success: (data, response) => action(VERIFY_OTP[SUCCESS], { data, response }),
    failure: (data, error) => action(VERIFY_OTP[FAILURE], { data, error }),
};

export const setLoggedInUser = {
    set: data => action(LOGGED_IN_USER[SET], { data }),
}

export const flagIsOtpSent = {
    set: () => action(FLAG_IS_OTP_SENT[SET]),
    unset: () => action(FLAG_IS_OTP_SENT[UNSET]),
};

export const setLoginModal = {
    set: () => action(SET_LOGIN_MODAL[SET]),
    unset: () => action(SET_LOGIN_MODAL[UNSET]),
}