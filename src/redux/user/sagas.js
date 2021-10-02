import { takeLatest, call, put } from "redux-saga/effects";
import { get as _get } from "lodash";

import { ToastAndroid } from "react-native";

import { REQUEST, SUCCESS } from "../action";
import { sendPayload, sendPayloadFailure } from "../_helpers";
import {
  LOGOUT, SEND_OTP, VERIFY_OTP,
  ADD_USER_SERVICES, CREATE_SERVICE_PROFILE,
  GET_SERVICE_PROFILE, GET_USER_SERVICES
} from "./types";
import {
  GET_SERVICES
} from "../services/types";
import {
  refresh, getOTP, verifyOTP,
  addUserProfile, getUserProfile,
  createUserService, getUserServices
} from "../../utils/services";
import { remember, clear } from "../../utils/services/auth";


function* handleLogoutUser() {
  try {
    yield put({ type: LOGOUT[SUCCESS] });
    clear();
    yield put({ type: GET_SERVICES[REQUEST] })
  } catch (e) {
    yield sendPayloadFailure(e, LOGOUT);
  }
}

function* handleSendOtp({ data }) {
  try {
    const apiResponse = yield call(getOTP, data);
    yield sendPayload(apiResponse, SEND_OTP);
  } catch (e) {
    yield sendPayloadFailure(e, SEND_OTP);
  }
}

function* handleVerifyOtp({ data }) {
  try {
    const apiResponse = yield call(verifyOTP, data);
    if (apiResponse.data.success) remember(apiResponse.data.data)
    yield sendPayload(apiResponse, VERIFY_OTP);
  } catch (e) {
    yield sendPayloadFailure(e, VERIFY_OTP);
  }
}

function* handleAddProfile({ data }) {
  try {
    const apiResponse = yield call(addUserProfile, data);
    if (apiResponse.data.success && apiResponse.status === 200) {
      ToastAndroid.showWithGravity(
        "Profile Added Successfully",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      )
      yield put({
        type: GET_SERVICE_PROFILE[REQUEST],
        data: { hm_user_id: data.hm_user_id }
      })
    }
    yield sendPayload(apiResponse, CREATE_SERVICE_PROFILE);
  } catch (e) {
    yield sendPayloadFailure(e, CREATE_SERVICE_PROFILE);
  }
}

function* handleGetProfile({ data }) {
  try {
    const apiResponse = yield call(getUserProfile, data);
    yield sendPayload(apiResponse, GET_SERVICE_PROFILE);
  } catch (e) {
    yield sendPayloadFailure(e, GET_SERVICE_PROFILE);
  }
}

function* handleAddUserService({ data }) {
  try {
    const apiResponse = yield call(createUserService, data);
    if (apiResponse.data.success && apiResponse.status === 200) {
      yield put({
        type: GET_USER_SERVICES[REQUEST],
        data: { ser_prof_id: data.ser_profile_id }
      })
    }
    yield sendPayload(apiResponse, ADD_USER_SERVICES);
  } catch (e) {
    yield sendPayloadFailure(e, ADD_USER_SERVICES);
  }
}

function* handleGetUserService({ data }) {
  try {
    const apiResponse = yield call(getUserServices, data);
    yield sendPayload(apiResponse, GET_USER_SERVICES);
  } catch (e) {
    yield sendPayloadFailure(e, GET_USER_SERVICES);
  }
}

export const userSaga = {
  watchLogoutUser: takeLatest(LOGOUT[REQUEST], handleLogoutUser),
  watchSendOtp: takeLatest(SEND_OTP[REQUEST], handleSendOtp),
  watchVerifyOtp: takeLatest(VERIFY_OTP[REQUEST], handleVerifyOtp),
  watchAddProfile: takeLatest(CREATE_SERVICE_PROFILE[REQUEST], handleAddProfile),
  watchGetProfile: takeLatest(GET_SERVICE_PROFILE[REQUEST], handleGetProfile),
  watchAddUserService: takeLatest(ADD_USER_SERVICES[REQUEST], handleAddUserService),
  watchGetUserService: takeLatest(GET_USER_SERVICES[REQUEST], handleGetUserService),
}


