import { StyleSheet, Dimensions } from "react-native";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 0
    },
    titleImage: {
        width: SCREEN_WIDTH / 2,
        height: 35,
    },
})