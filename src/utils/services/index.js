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
    Object.keys(data).forEach( key => form.append(key, data[key]));
    const response = await api(timeout).post(url, form);
    return response;
};

export const getOTP = (data) => POST(`/location/create_otp/`, data);
export const verifyOTP = (data) => POST(`location/verify_otp/`, data)

export const getServices = () => GET('/location/get_servicetype_home/');
export const getServiceDetails = data => POST('/location/get_servicetype_Details/', data);

export const getServiceTypeDistricts = data => POST('/location/get_service_type_district/', { state_key_id: 127, ...data });
export const getServiceTypeTaluka = data => POST('/location/get_service_type_taluka/', data);
export const getServiceTypePlaces = data => POST('/location/get_service_type_nearbyplaces/', data);

export const setContactHits = data => POST('/location/set_sp_contact_hits/', data);
export const getServicemen = data => POST('/location/get_serviceprovider_details/', data);
