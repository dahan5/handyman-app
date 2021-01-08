import { StyleSheet } from 'react-native';
import Colors from "../../../utils/constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: '33.33333%',
        height: 150,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 3,
        color: Colors.secondaryTextColor,
    },
    image: {
        width: '70%',
        height: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4,
    },
    subtext: {
        fontSize: 12,
        fontWeight: '500'
    }
})