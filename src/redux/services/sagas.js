import { takeLatest, call, put, takeLeading } from "redux-saga/effects";
import { get as _get } from "lodash";

import { sendPayload, sendPayloadFailure } from "../_helpers";
import { REQUEST, SET } from "../action";
import {
    GET_SERVICES, GET_DISTRICTS, SET_CONTACT_HITS,
    GET_PLACES, GET_TALUKA, GET_SERVICEMEN,
    SET_TOTAL_PAGES, GET_SPECIFIC_SERVICE_DETAILS,
    GET_STATES, GET_SERVICE_TYPE_DISTRICTS,
    GET_SERVICE_TYPE_TALUKA, GET_SERVICE_TYPE_PLACES,
    GET_SERVICE_TYPE_STATES
} from "./types";
import {
    getServices, getServicemen, getServiceDetails,
    getServiceTypeDistricts, getServiceTypeTaluka,
    getServiceTypePlaces, setContactHits,
    getServiceTypeStates, getDistricts, getTaluka,
    getPlaces, getStates
} from "../../utils/services";

function* handleGetServices() {
    try {
        const apiResponse = yield call(getServices);
        yield sendPayload(apiResponse, GET_SERVICES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICES);
    }
}

function* handleGetStates({ data }) {
    try {
        const apiResponse = yield call(getStates, data);
        yield sendPayload(apiResponse, GET_STATES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_STATES);
    }
}

function* handleGetDistricts({ data }) {
    try {
        const apiResponse = yield call(getDistricts, data);
        yield sendPayload(apiResponse, GET_DISTRICTS);
    } catch (e) {
        yield sendPayloadFailure(e, GET_DISTRICTS);
    }
}

function* handleGetTaluka({ data }) {
    try {
        const apiResponse = yield call(getTaluka, data);
        yield sendPayload(apiResponse, GET_TALUKA);
    } catch (e) {
        yield sendPayloadFailure(e, GET_TALUKA);
    }
}

function* handleGetPlaces({ data }) {
    try {
        const apiResponse = yield call(getPlaces, data);
        yield sendPayload(apiResponse, GET_PLACES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_PLACES);
    }
}

function* handleGetServiceTypeDistricts({ data }) {
    try {
        const apiResponse = yield call(getServiceTypeDistricts, data);
        yield sendPayload(apiResponse, GET_SERVICE_TYPE_DISTRICTS);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICE_TYPE_DISTRICTS);
    }
}

function* handleGetServiceTypeStates({ data }) {
    try {
        const apiResponse = yield call(getServiceTypeStates, data);
        yield sendPayload(apiResponse, GET_SERVICE_TYPE_STATES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICE_TYPE_STATES);
    }
}

function* handleGetServiceTypeTaluka({ data }) {
    try {
        const apiResponse = yield call(getServiceTypeTaluka, data);
        yield sendPayload(apiResponse, GET_SERVICE_TYPE_TALUKA);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICE_TYPE_TALUKA);
    }
}

function* handleGetServiceTypePlaces({ data }) {
    try {
        const apiResponse = yield call(getServiceTypePlaces, data);
        yield sendPayload(apiResponse, GET_SERVICE_TYPE_PLACES);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SERVICE_TYPE_PLACES);
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

function* handleGetServiceDetails({ data }) {
    try {
        const apiResponse = yield call(getServiceDetails, data);
        yield sendPayload(apiResponse, GET_SPECIFIC_SERVICE_DETAILS);
    } catch (e) {
        yield sendPayloadFailure(e, GET_SPECIFIC_SERVICE_DETAILS);
    }
}

export const serviceSaga = {
    watchGetServices: takeLatest(GET_SERVICES[REQUEST], handleGetServices),
    watchGetStates: takeLatest(GET_STATES[REQUEST], handleGetStates),
    watchGetDistricts: takeLatest(GET_DISTRICTS[REQUEST], handleGetDistricts),
    watchGetTaluka: takeLatest(GET_TALUKA[REQUEST], handleGetTaluka),
    watchGetPlaces: takeLatest(GET_PLACES[REQUEST], handleGetPlaces),
    watchGetServiceTypeStates: takeLatest(GET_SERVICE_TYPE_STATES[REQUEST], handleGetServiceTypeStates),
    watchGetServiceTypeDistricts: takeLatest(GET_SERVICE_TYPE_DISTRICTS[REQUEST], handleGetServiceTypeDistricts),
    watchGetServiceTypeTaluka: takeLatest(GET_SERVICE_TYPE_TALUKA[REQUEST], handleGetServiceTypeTaluka),
    watchGetServiceTypePlaces: takeLatest(GET_SERVICE_TYPE_PLACES[REQUEST], handleGetServiceTypePlaces),
    watchGetServicemen: takeLatest(GET_SERVICEMEN[REQUEST], handleGetServicemen),
    watchSetContactHits: takeLatest(SET_CONTACT_HITS[REQUEST], handleSetContactHits),
    watchGetServiceDetails: takeLeading(GET_SPECIFIC_SERVICE_DETAILS[REQUEST], handleGetServiceDetails),
}

