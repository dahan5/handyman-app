import { takeLatest, call, put } from "redux-saga/effects";
import { get as _get } from "lodash";

import { REQUEST, SUCCESS } from "../action";
import { sendPayload, sendPayloadFailure } from "../_helpers";
import {
    LOGOUT, REFRESH,
    SEND_OTP, VERIFY_OTP
} from "./types";
import {
    GET_SERVICES
} from "../services/types";
import {
    refresh, getOTP, verifyOTP
} from "../../utils/services";

function* handleLogoutUser() {
    try {
        yield put({ type: LOGOUT[SUCCESS] });
        yield call(Router.push, '/');
        yield put({ type: GET_SERVICES[REQUEST] })
    } catch (e) {
        yield sendPayloadFailure(e, LOGOUT);
    }
}

function* handleRefresh({ data }) {
    try {
        const apiResponse = yield call(refresh, data);
        yield sendPayload(apiResponse, REFRESH);
    } catch (e) {
        yield sendPayloadFailure(e, REFRESH);
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
        yield sendPayload(apiResponse, VERIFY_OTP);
    } catch (e) {
        yield sendPayloadFailure(e, VERIFY_OTP);
    }
}

export const userSaga = {
    watchLogoutUser: takeLatest(LOGOUT[REQUEST], handleLogoutUser),
    watchRefresh: takeLatest(REFRESH[REQUEST], handleRefresh),
    watchSendOtp: takeLatest(SEND_OTP[REQUEST], handleSendOtp),
    watchVerifyOtp: takeLatest(VERIFY_OTP[REQUEST], handleVerifyOtp),
}


