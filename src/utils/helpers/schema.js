import * as Yup from "yup";

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