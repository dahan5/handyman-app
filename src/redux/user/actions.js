import { action, FAILURE, REQUEST, SET, SUCCESS, UNSET } from "../action";
import {
    FLAG_IS_OTP_SENT,
    LOGOUT,
    LOGGED_IN_USER,
    SEND_OTP,
    VERIFY_OTP,
    REFRESH,
    SET_LOGIN_MODAL,
    ADD_USER_SERVICES,
    CREATE_SERVICE_PROFILE,
    GET_USER_SERVICES,
    GET_SERVICE_PROFILE,
    USER_SERVICES
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

export const createProfile = {
    request: data => action(CREATE_SERVICE_PROFILE[REQUEST], { data }),
    success: (data, response) => action(CREATE_SERVICE_PROFILE[SUCCESS], { data, response }),
    failure: (data, error) => action(CREATE_SERVICE_PROFILE[FAILURE], { data, error }),
};

export const getProfile = {
    request: data => action(GET_SERVICE_PROFILE[REQUEST], { data }),
    success: (data, response) => action(GET_SERVICE_PROFILE[SUCCESS], { data, response }),
    failure: (data, error) => action(GET_SERVICE_PROFILE[FAILURE], { data, error }),
};

export const addService = {
    request: data => action(ADD_USER_SERVICES[REQUEST], { data }),
    success: (data, response) => action(ADD_USER_SERVICES[SUCCESS], { data, response }),
    failure: (data, error) => action(ADD_USER_SERVICES[FAILURE], { data, error }),
    set: data => action(USER_SERVICES[SET], { data })
};

export const getServices = {
    request: data => action(GET_USER_SERVICES[REQUEST], { data }),
    success: (data, response) => action(GET_USER_SERVICES[SUCCESS], { data, response }),
    failure: (data, error) => action(GET_USER_SERVICES[FAILURE], { data, error }),
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