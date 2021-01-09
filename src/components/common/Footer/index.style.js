import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.footerBackground,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
        paddingVertical: 15,
    },
    copyright: {
        borderColor: Colors.primaryBackgroundColor,
        borderTopWidth: 1,
        paddingTop: 8
    },
    color: {
        color: Colors.primaryBackgroundColor,
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 7,
    },
    icon: {
        marginRight: SCREEN_WIDTH / 18,
    }
})