export const PENDING = "PENDING";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const SET = "SET";
export const UNSET = "UNSET";

export const createRequestTypes = base => {
    return [PENDING, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

export const createFlagTypes = base => {
    return [SET, UNSET, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

export const action = (type, payload = {}) => {
    return { type, ...payload };
};