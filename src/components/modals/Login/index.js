import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useTimer } from "react-compound-timer";

import { Text, View, Modal, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { styles } from './index.styles';
import { otpLoginValidationSchema, requestOtpValidationSchema } from "../../../utils/helpers/schema";
import { leadingZero, validateSchemaAndProceed } from "../../../utils/helpers";
import {
    sendOTP, verifyOTP, flagIsOtpSent,
} from "../../../redux/user/actions";
import {
    selectIsAuthFetching, selectIsOtpSent, selectIsOtpSending,
    selectIsLoggingIn, selectShowLoginModal, selectIsAuth
} from "../../../redux/user/selectors";
import Colors from "../../../utils/constants/colors";
import TextInput from "../../common/TextInput";


const Login = ({ navigation, ...props }) => {

    const {
        d__sendOTP, d__verifyOTP, selectIsOtpSent, selectIsOtpSending, d__unsetFlagIsOtpSent,
        selectIsLoggingIn, selectIsAuth
    } = props;

    const {
        value,
        controls: { setTime, setDirection, getTime, start }
    } = useTimer();

    const bounceValue = new Animated.Value(100)

    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");

    const verifyOtp = () => {
        d__verifyOTP({ mobile: mobile, otp: otp });
    }

    const getOtp = () => {
        d__sendOTP({ mobile: mobile });
    }

    const onButtonClick = () => {
        selectIsOtpSent
            ? validateSchemaAndProceed(otpLoginValidationSchema, { mobile, otp }, verifyOtp)
            : validateSchemaAndProceed(requestOtpValidationSchema, { mobile }, getOtp)
    }

    useEffect(() => {
        if (selectIsOtpSent) {
            setTime(60000)
            setDirection("backward");
            start();
        }
    }, [selectIsOtpSent])

    useEffect(() => {
        if(selectIsAuth)
            navigation.pop();
    }, [selectIsAuth])

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => navigation.pop()}
            >
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <TouchableOpacity style={styles.close} onPress={() => navigation.pop()}>
                            <Icon name="close" size={24} color={Colors.primaryTextColor} />
                        </TouchableOpacity>
                        <Text style={styles.header}>Sign-in to InfoHandyman.com</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={mobile}
                                label="Mobile Number"
                                onValueChange={setMobile}
                                autoFocus={!selectIsOtpSent}
                                editable={!selectIsOtpSent}
                                keyboardType='number-pad'
                                multiline={false}
                                showEdit={selectIsOtpSent}
                                onClickEdit={() => d__unsetFlagIsOtpSent()}
                            />
                            {selectIsOtpSent &&
                                <View style={styles.otpContainer}>

                                    <TextInput
                                        value={otp}
                                        label="Enter OTP"
                                        onValueChange={setOtp}
                                        autoFocus={selectIsOtpSent}
                                        keyboardType='number-pad'
                                        multiline={false}
                                    />
                                    <View style={styles.resend}>
                                        {getTime() > .5
                                            ? <Text>{`Resend in ${leadingZero(value.m)}:${leadingZero(value.s)}`}</Text>
                                            : <TouchableOpacity onPress={getOtp}><Text>Resend OTP</Text></TouchableOpacity>
                                        }
                                    </View>
                                </View>
                            }
                            <TouchableOpacity
                                disabled={selectIsOtpSending || selectIsLoggingIn}
                                onPress={onButtonClick}
                                style={styles.appButtonContainer}
                            >
                                {(selectIsOtpSending || selectIsLoggingIn)
                                    ? <ActivityIndicator color='white' />
                                    : <Text style={styles.appButtonText}>
                                        {selectIsOtpSent
                                            ? 'Login'
                                            : 'Get OTP'
                                        }
                                    </Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
    selectIsAuthFetching, selectIsOtpSent, selectIsOtpSending,
    selectIsLoggingIn, selectShowLoginModal, selectIsAuth
})

const mapDispatchToProps = dispatch => {
    return {
        d__sendOTP: data => dispatch(sendOTP.request(data)),
        d__verifyOTP: data => dispatch(verifyOTP.request(data)),
        d__setFlagIsOtpSent: () => dispatch(flagIsOtpSent.set()),
        d__unsetFlagIsOtpSent: () => dispatch(flagIsOtpSent.unset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)