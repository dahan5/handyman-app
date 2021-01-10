import { StyleSheet } from 'react-native';
import Colors from "../../../utils/constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '33.33333%',
        height: 135,
    },
    image: {
        width: '45%',
        height: '45%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4,
        resizeMode: 'contain'
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 3,
        color: Colors.secondaryTextColor,
    },
    subtext: {
        fontSize: 12,
        fontWeight: '500'
    }
})