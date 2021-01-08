import { takeLatest, call, put, takeLeading } from "redux-saga/effects";
import { get as _get } from "lodash";

import { sendPayload, sendPayloadFailure } from "../_helpers";
import { REQUEST, SET } from "../action";
import {
    GET_SERVICES, GET_DISTRICTS, SET_CONTACT_HITS,
    GET_PLACES, GET_TALUKA, GET_SERVICEMEN,
    SET_TOTAL_PAGES,
} from "./types";
import {
    getServices, getServicemen,
    getServiceTypeDistricts, getServiceTypeTaluka,
    getServiceTypePlaces, setContactHits,
} from "../../utils/services";

function* handleGetServices() {
    try {
        const apiResponse = yield call(getServices);
        yield sendPayload(apiResponse, GET_SERVICES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICES);
    }
}

function* handleGetDistricts() {
    try {
        const apiResponse = yield call(getServiceTypeDistricts, {});
        yield sendPayload(apiResponse, GET_DISTRICTS);
    } catch (e) {
        yield sendPayloadFailure(e, GET_DISTRICTS);
    }
}

function* handleGetTaluka({ data }) {
    try {
        const apiResponse = yield call(getServiceTypeTaluka, data);
        yield sendPayload(apiResponse, GET_TALUKA);
    } catch (e) {
        yield sendPayloadFailure(e, GET_TALUKA);
    }
}

function* handleGetPlaces({ data }) {
    try {
        const apiResponse = yield call(getServiceTypePlaces, data);
        yield sendPayload(apiResponse, GET_PLACES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_PLACES);
    }
}

function* handleGetServicemen({ data }) {
    try {
        const apiResponse = yield call(getServicemen, data);
        if (apiResponse.data.success) {
            yield put({ type: SET_TOTAL_PAGES[SET], payload: apiResponse.data.number_of_pages })
        }
        yield sendPayload(apiResponse, GET_SERVICEMEN);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICEMEN);
    }
}

function* handleSetContactHits({ data }) {
    try {
        const apiResponse = yield call(setContactHits, data);
        yield sendPayload(apiResponse, SET_CONTACT_HITS);
    } catch (e) {
        yield sendPayloadFailure(e, SET_CONTACT_HITS);
    }
}

export const serviceSaga = {
    watchGetServices: takeLatest(GET_SERVICES[REQUEST], handleGetServices),
    watchGetDistricts: takeLatest(GET_DISTRICTS[REQUEST], handleGetDistricts),
    watchGetTaluka: takeLatest(GET_TALUKA[REQUEST], handleGetTaluka),
    watchGetPlaces: takeLatest(GET_PLACES[REQUEST], handleGetPlaces),
    watchGetServicemen: takeLatest(GET_SERVICEMEN[REQUEST], handleGetServicemen),
    watchSetContactHits: takeLatest(SET_CONTACT_HITS[REQUEST], handleSetContactHits),
}

