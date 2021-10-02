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
        paddingTop: 16
    },
    myServices: {
        paddingHorizontal: SCREEN_WIDTH / 9
    },
    servicesContainer: {
        flexGrow: 1
    },
    noServices: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addService: {
        elevation: 8,
        backgroundColor: Colors.primaryButtonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        color: Colors.primaryBackgroundColor,
        marginTop: 4,
        marginBottom: 12
    },
    button: {
        color: Colors.primaryBackgroundColor,
        textAlign: 'center'
    }
})