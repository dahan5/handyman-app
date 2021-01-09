import { StyleSheet, Dimensions } from "react-native";

import Colors from "../../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000033',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        zIndex: 1,
        width: SCREEN_WIDTH,
    },
    loginContainer: {
        shadowColor: "#000",
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        zIndex: 3,
        width: SCREEN_WIDTH - 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 15,
        paddingBottom: 25,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.primaryBackgroundColor,
    },
    close: {
        position: 'absolute',
        top: 5,
        right: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primaryTextColor,
    },
    inputContainer: {
        paddingTop: 15,
    },
    subView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        height: 100,
    },
    otpContainer: {
        paddingBottom: 15
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: Colors.primaryButtonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 16,
        color: Colors.primaryBackgroundColor,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})