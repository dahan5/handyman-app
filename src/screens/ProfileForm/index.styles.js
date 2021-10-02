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
        padding: 12
    },
    contactContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    label: {
        left: 4
    },
    value: {
        paddingLeft: 10
    },
    buttonStyle: {
        width: SCREEN_WIDTH / 2 - 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    save: {
        backgroundColor: Colors.primaryButtonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        color: Colors.primaryBackgroundColor
    },
    cancel: {
        backgroundColor: Colors.secondaryBackgroundColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    text: {
        textAlign: 'center'
    }
})