import * as Yup from "yup";

import { VILLAGE_SELECTION_LIMIT } from "../constants";

export const requestOtpValidationSchema = Yup.object().shape({
    mobile: Yup.string("Enter your mobile number")
        .required("Mobile number is required")
        .matches(/^\d+$/, {
            message: "Only numeric values are allowed",
            excludeEmptyString: true,
        })
        .min(10, 'Enter a valid mobile number')
        .max(10, 'Enter a valid mobile number')
});

export const otpLoginValidationSchema = Yup.object().shape({
    mobile: Yup.string("Enter your mobile number")
        .required("Mobile number is required")
        .matches(/^\d+$/, {
            message: "Only numeric values are allowed",
            excludeEmptyString: true,
        })
        .min(10, 'Enter a valid mobile number')
        .max(10, 'Enter a valid mobile number'),
    otp: Yup.string("Enter otp")
        .required("Otp is required")
        .matches(/^\d+$/, {
            message: "Only numeric values are allowed",
            excludeEmptyString: true,
        })
        .min(5, 'Otp be must be 6 characters')
        .max(5, 'Otp be must be 6 characters')

});

export const registerUserProfile = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, 'Name should have at least 3 letters'),
    store: Yup.string(),
    address: Yup.string().required("Valid address is required"),
    mobile1: Yup.string()
        .required("Phone number is required")
        .matches(/^\d+$/, {
            message: "Only numeric values are allowed",
            excludeEmptyString: true,
        })
        .length(10),
    mobile2: Yup.string()
        .matches(/^\d+$/, {
            message: "Only numeric values are allowed",
            excludeEmptyString: true,
        })
        .test("contact_validation", "Numbers must be 10 digits", val => {
            if (!val) return true;
            const numbers = val.trim().split(",");
            let valid = true;
            numbers.forEach(number => {
                if (!(/^\d+$/.test(number)) || number.length !== 10) valid = false;
            })
            return valid;
        }),
    proofType: Yup.string().required("Select an id type"),
    proofFile: Yup.string().required("Upload a valid id card")
})

export const registerUserService = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(3, 'Name should have at least 3 letters'),
    serviceType: Yup.string()
        .required("Service type is required"),
    specification: Yup.string(),
    startDate: Yup.date(),
    state: Yup.number()
        .required("State is required"),
    district: Yup.number()
        .required("District is required"),
    taluka: Yup.number()
        .required("Taluka is required"),
    city: Yup.array()
        .required('Select at least one place')
        .max(VILLAGE_SELECTION_LIMIT, `Only ${VILLAGE_SELECTION_LIMIT} cities are allowed`),
})
