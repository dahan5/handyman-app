import { StyleSheet } from 'react-native';

import Colors from "../../utils/constants/colors";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 3,
        color: Colors.secondaryTextColor,
    },
    subtext: {
        fontSize: 12,
        fontWeight: '500'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    listContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 15,
    }
})