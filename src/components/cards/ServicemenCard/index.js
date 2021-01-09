import React from 'react';

import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./index.styles";
import Colors from "../../../utils/constants/colors";

const ServicemenCard = props => {

    const { data, selectIsAuth, updateHits, navigation } = props;


    const onButton = data => {
        if(selectIsAuth) {
            updateHits(data.SERVICE_PROVIDER_ID);
            Linking.openURL(`tel:+91${data.contact_data[0]}`)
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>{data.SP_NAME}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detail}>
                        <Text style={styles.label}>Work Experience</Text>
                        <Text style={styles.value}>{data.SERVICE_START_DATE}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.label}>People Contacted</Text>
                        <Text style={styles.value}>{data.CONTACT_HITS}</Text>
                    </View>
                    {data.SP_SPECIALIZATION && data.SP_SPECIALIZATION.length && data.SP_SPECIALIZATION !== "NA" &&
                        <View style={styles.detail}>
                            <Text style={styles.label}>Specialization</Text>
                            <Text style={styles.value}>{data.SP_SPECIALIZATION}</Text>
                        </View>
                    }
                </View>
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => onButton(data)}>
                    <View style={styles.callButton}>
                        <Icon name="phone" size={28} color={Colors.blue} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default ServicemenCard;