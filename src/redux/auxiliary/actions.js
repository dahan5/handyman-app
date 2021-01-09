import { action, SET, UNSET } from "../action";
import { GLOBAL_API_ERROR_FLAG, GLOBAL_API_SUCCESS_FLAG, GLOBAL_MODAL_FLAG } from "./types";

export const globalApiErrorFlag = {
    set: () => action(GLOBAL_API_ERROR_FLAG[SET]),
    unset: () => action(GLOBAL_API_ERROR_FLAG[UNSET])
};

export const globalApiSuccessFlag = {
    set: () => action(GLOBAL_API_SUCCESS_FLAG[SET]),
    unset: () => action(GLOBAL_API_SUCCESS_FLAG[UNSET])
};

export const globalModalFlag = {
    set: (modalType, modalData) => action(GLOBAL_MODAL_FLAG[SET], { modalType, modalData }),
    unset: () => action(GLOBAL_MODAL_FLAG[UNSET])
};