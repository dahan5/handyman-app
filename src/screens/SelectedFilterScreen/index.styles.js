import { StyleSheet, Dimensions } from 'react-native';
import Colors from "../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: 30
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    service: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: SCREEN_WIDTH / 10,
        height: SCREEN_WIDTH / 12,
        marginRight: 4,
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
    filterSection: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: .7,
        overflow: 'hidden',
        padding: 10,
    },
    selectHeader: {
        borderBottomColor: '#cecece',
        padding: 8,
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        color: Colors.secondaryTextColor,
        marginLeft: 7,
    },
    dropdownContainer: {
        marginTop: 12,
        paddingHorizontal: 7
    },
    button: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})