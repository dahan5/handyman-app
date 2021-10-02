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
    form: {
        padding: 12
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    step: {
        color: Colors.primaryBackgroundColor,
        height: 24,
        width: 24,
        backgroundColor: '#464f7c',
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        marginRight: 12
    },
    divider: {
        ...DefaultBorder,
        height: 1,
        flex: 1,
        marginTop: 12,
    },
    buttonStyle: {
        width: SCREEN_WIDTH / 2 - 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16
    },
    save: {
        backgroundColor: Colors.primaryButtonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    cancel: {
        backgroundColor: Colors.secondaryBackgroundColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    text: {
        textAlign: 'center',
    },
    saveText: {
        color: Colors.primaryBackgroundColor
    },
    multiple: {
        paddingHorizontal: 8
    }
})