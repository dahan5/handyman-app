import { get as _get } from "lodash";
import { ToastAndroid } from "react-native";

export const validateSchemaAndProceed = (schema, object, callback) => {
    return schema.validate(object)
        .then((v) => callback())
        .catch(val => ToastAndroid.showWithGravity(
            _get(val, 'errors.0'),
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        ))
}

export const leadingZero = value => {
    return value < 10 ? `0${value}` : value;
}