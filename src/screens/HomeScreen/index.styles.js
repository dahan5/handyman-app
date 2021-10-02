import { StyleSheet, Dimensions } from 'react-native';

import Colors from "../../utils/constants/colors";
import { DefaultBorder } from '../../utils/constants/styles';

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
        height: 785,
        padding: 20,
        paddingVertical: 40,
        position: 'absolute',
        top: 0
    },
    serviceContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 275,
        backgroundColor: 'white',
        marginBottom: SCREEN_WIDTH / 15,
        borderRadius: 10,
        ...DefaultBorder,
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
    register: {
        marginVertical: 8,
        color: Colors.primaryTextColor,
        textAlign: 'center',
        fontSize: 16,
        marginTop: SCREEN_WIDTH / 10,
        fontWeight: 'bold',
        marginBottom: 16,
        textTransform: 'uppercase'
    },
    or: {
        marginVertical: 8,
        color: Colors.primaryTextColor,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    addService: {
        marginLeft: 'auto',
        marginRight: 'auto',
        // paddingLeft: 15,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 40,
        borderColor: '#e1eaf1',
        ...DefaultBorder
    },
    contactUs: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SCREEN_WIDTH / 8,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 40,
        borderColor: '#e1eaf1',
        ...DefaultBorder
    },
    callNumber: {
        fontSize: SCREEN_WIDTH / 19,
        color: Colors.blue,
        paddingRight: 10,
        fontWeight: 'bold'
    },
    howItWorks: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * .53,
    },
    contactUsContainer: {
        backgroundColor: Colors.secondaryBackgroundColor
    }
})