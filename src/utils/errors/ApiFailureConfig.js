import { FAILURE } from "../../redux/actionCreator";
import { SEND_OTP, VERIFY_OTP } from "../../redux/user/types";

const GLOBAL_API_FAILURE_CONFIG = [
    SEND_OTP[FAILURE],
    VERIFY_OTP[FAILURE],
];

export default GLOBAL_API_FAILURE_CONFIG;