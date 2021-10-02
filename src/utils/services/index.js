import axios from "axios";
import { get as _get } from "lodash";

import { config } from "../../config";

export const api = function (timeout = 10000, baseURL = config.apiUrl) {
    return axios.create({
        baseURL: baseURL,
        timeout: timeout,
        validateStatus: status => (status >= 200 && status < 500)
    });
};

const GET = async (url, params = {}) => {
    const response = await api().get(url, { params });
    return response;
};

const POST = async (url, data, timeout) => {
    var form = new FormData();
    Object.keys(data).forEach(key => form.append(key, data[key]));
    const response = await api(timeout).post(url, form);
    return response;
};

export const getOTP = (data) => POST(`/location/create_otp/`, data);
export const verifyOTP = (data) => POST(`location/verify_otp/`, data);
export const addUserProfile = data => POST('/location/create_service_profile/', data);
export const getUserProfile = data => POST('/location/show_service_profile/', data);
export const createUserService = data => POST('/location/add_ser_provider/', data);
export const getUserServices = data => POST('/location/show_ser_provider/', data);

export const getServices = () => GET('/location/get_servicetype_home/');
export const getServiceDetails = data => POST('/location/get_servicetype_Details/', data);

export const getServiceTypeStates = data => POST('/location/get_service_type_state/', { country_key_id: 1, ...data });
export const getServiceTypeDistricts = data => POST('/location/get_service_type_district/', data);
export const getServiceTypeTaluka = data => POST('/location/get_service_type_taluka/', data);
export const getServiceTypePlaces = data => POST('/location/get_service_type_nearbyplaces/', data);

export const getStates = () => POST('/location/get_state/', { country_key_id: 1 });
export const getDistricts = data => POST('/location/get_district/', data);
export const getTaluka = data => POST('/location/get_taluka/', data);
export const getPlaces = data => POST('/location/get_nearbyplaces/', data);

export const setContactHits = data => POST('/location/set_sp_contact_hits/', data);
export const getServicemen = data => POST('/location/get_serviceprovider_details/', data);
