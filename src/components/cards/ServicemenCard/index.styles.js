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
        flexGrow: 1,
        width: '80%',
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
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    detail: {
        width: '50%',
        paddingVertical: 8,
        flex: 1,
    },
    specialization: {
        flex: 2,
    },
    label: {
        color: Colors.green,
    },
    callButton: {
        overflow: 'hidden',
        padding: 16,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.secondaryBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    }
})