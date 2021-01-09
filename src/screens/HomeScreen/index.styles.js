import { StyleSheet, Dimensions } from 'react-native';

import Colors from "../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    backgroundImage: {
        width: "100%",
        height: 350,
        padding: 20,
        paddingVertical: 40,
        position: 'absolute',
        top: 0
    },
    serviceContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        marginBottom: SCREEN_WIDTH / 15,
        borderRadius: 10,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: .7
    },
    selectServiceHeader: {
        borderBottomColor: '#cecece',
        padding: 8,
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.secondaryTextColor,
    },
    services: {
        paddingTop: SCREEN_WIDTH / 20,
    },
    contactUs: {
        width: SCREEN_WIDTH * .7,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: SCREEN_WIDTH / 8,
        borderRadius: 50,
        backgroundColor: 'transparent',
    },
    callUsText: {
        color: Colors.blue,
        fontSize: SCREEN_WIDTH / 25,
    },
    callNumber: {
        fontSize: SCREEN_WIDTH / 19,
        color: Colors.blue,
        fontWeight: 'bold'
    },
    titleImage: {
        width: SCREEN_WIDTH / 2,
        height: 35,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
})