import { StyleSheet } from 'react-native';

import Colors from "../../../utils/constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.primaryBackgroundColor,
        borderColor: Colors.borderColor,
        borderRadius: 4,
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderWidth: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
    },
    left: {
        flexGrow: 1
    },
    name: {
        fontSize: 18,
        paddingBottom: 5,
        fontWeight: 'bold',
        color: Colors.primaryTextColor,
    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    detail: {
        flex: .5,
        paddingVertical: 7
    },
    label: {
        color: Colors.green,
    },
    callButton: {
        overflow: 'hidden',
        padding: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.secondaryBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    }
})