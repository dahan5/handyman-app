import { StyleSheet, Dimensions } from "react-native";
import Colors from "../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    notification: {
        paddingRight: 18
    },
    blueText: {
        color: Colors.blue
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        alignItems: 'center'
    },
    header: {
        borderRadius: 0,
        marginHorizontal: 0,
        marginBottom: 0,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd'
    },
    scrollContainer: {
        height: SCREEN_HEIGHT - 120
    },
    logoutView: {
        borderTopWidth: 1,
        borderColor: Colors.primaryTextColor,
        borderTopColor: '#cdcdcd'
    },
    profileTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: focused => ({
        fontSize: 16,
        color: focused ? Colors.primaryBackgroundColor : Colors.secondaryTextColor,
        fontWeight: '500',
        letterSpacing: 0.2
    }),
    profileStatus: color => (
        {
            textTransform: 'capitalize',
            color: color || '#212121'
        }
    ),
    labelStyle: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.2
    },
    itemStyle: {
        borderRadius: 0,
        marginHorizontal: 0,
        paddingLeft: 10,
        marginVertical: 0,
        paddingVertical: 3
    }
})
