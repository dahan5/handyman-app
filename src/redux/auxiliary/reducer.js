import { combineReducers } from "redux";
import { get as _get, includes as _includes } from "lodash";

import { SET, UNSET } from "../action";
import GLOBAL_API_FAILURE_CONFIG from "../../utils/errors/ApiFailureConfig";
import GLOBAL_API_SUCCESS_CONFIG from "../../utils/errors/ApiSuccessConfig";
import { GLOBAL_API_ERROR_FLAG, GLOBAL_API_SUCCESS_FLAG, GLOBAL_MODAL_FLAG } from "./types";

const initialSuccessState = {
  message: null,
  actionTriggered: null
};

const aux = () => {
  // Only latest Api Error will be reflected
  // to catch here add action  to GLOBAL_API_SUCCESS_CONFIG
  const globalAPIError = (state = {}, action) => {
    if (_includes(GLOBAL_API_FAILURE_CONFIG, action.type)) {
      return Object.assign({}, state, action.payload, {
        actionTriggered: action.type
      });
    } else if (action.type === GLOBAL_API_ERROR_FLAG[UNSET]) {
      return initialSuccessState;
    }
    return state;
  };

  // Only latest Api Success will be reflected
  // to catch here add action  to GLOBAL_API_SUCCESS_CONFIG
  const globalAPISuccess = (state = {}, action) => {
    if (_get(GLOBAL_API_SUCCESS_CONFIG, [action.type])) {
      return Object.assign(
        {},
        {
          actionTriggered: action.type,
          message:
            _get(GLOBAL_API_SUCCESS_CONFIG, [action.type]) ||
            "Action Completed Successfully"
        }
      );
    } else if (action.type === GLOBAL_API_SUCCESS_FLAG[UNSET]) {
      return initialSuccessState;
    }
    return state;
  };

  const globalModal = (state = {}, action) => {
    if (action.type === GLOBAL_MODAL_FLAG[SET]) {
      return {
        isModal: true,
        modalType: action.modalType,
        modalData: action.modalData,
      }
    } else if (action.type === GLOBAL_MODAL_FLAG[UNSET]) {
      return {
        isModal: false
      }
    }

    return state
  };

  return combineReducers({
    globalAPIError,
    globalAPISuccess,
    globalModal,
  });
}

export default aux;