import {SEND_OTP} from "../../redux/user/types";
import {SUCCESS} from "../../redux/actionCreator";

const GLOBAL_API_SUCCESS_CONFIG = {
    [SEND_OTP[SUCCESS]]: "OTP Sent on registered number",
};

export default GLOBAL_API_SUCCESS_CONFIG;