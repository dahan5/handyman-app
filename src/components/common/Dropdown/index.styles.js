import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        borderColor: Colors.borderColor,
        borderRadius: 5,
        padding: 5,
        position: 'relative',
        marginVertical: 15,
    },
    label: {
        position: 'absolute',
        left: 15,
        top: -10,
        paddingHorizontal: 5,
        backgroundColor: Colors.primaryBackgroundColor,
        fontSize: 14,
        color: Colors.secondaryTextColor,
        fontWeight: 'bold',
    },
    dropdown: {
        backgroundColor: Colors.primaryBackgroundColor,
    },
    default: {
        textAlign: 'center'
    }
})