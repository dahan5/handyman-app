import { createFlagTypes, createRequestTypes } from "../action";

export const LOGOUT = createRequestTypes("LOGOUT");
export const SEND_OTP = createRequestTypes("SEND_OTP");
export const VERIFY_OTP = createRequestTypes("VERIFY_OTP");
export const FLAG_IS_OTP_SENT = createFlagTypes("FLAG_IS_OTP_SENT");
export const REFRESH = createRequestTypes("REFRESH");
export const LOGGED_IN_USER = createFlagTypes('LOGGED_IN_USER');
export const SET_LOGIN_MODAL = createFlagTypes('SET_LOGIN_MODAL');
export const CREATE_SERVICE_PROFILE = createRequestTypes("CREATE_SERVICE_PROFILE");
export const GET_SERVICE_PROFILE = createRequestTypes("GET_SERVICE_PROFILE");
export const ADD_USER_SERVICES = createRequestTypes("ADD_USER_SERVICES");
export const USER_SERVICES = createFlagTypes("USER_SERVICES");
export const GET_USER_SERVICES = createRequestTypes("GET_USER_SERVICES");
