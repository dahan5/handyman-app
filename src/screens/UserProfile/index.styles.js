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
    detailsContainer: {
        flex: 1,
        width: SCREEN_WIDTH - 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 32,
    },
    name: {
        color: Colors.secondaryTextColor,
        fontSize: 16
    },
    value: {
        color: Colors.primaryTextColor,
        fontSize: 20,
        textTransform: 'capitalize'
    },
    detailContainer: {
        minWidth: '45%',
        paddingBottom: 12
    },
    pending: {
        color: Colors.yellow,
        fontSize: 20,
        fontWeight: 'bold'
    },
    approved: {
        color: '#03D269',
        fontSize: 20,
        fontWeight: 'bold'
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    info: {
        fontWeight: 'bold',
        color: Colors.primaryTextColor,
        alignItems: 'center'
    },
    morePlaces: {
        textAlign: 'center',
        paddingVertical: 8,
    },
    contact: {
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 8
    }
})