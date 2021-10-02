import React from 'react';

import { View, Text, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from "./index.styles";
import Colors from "../../../utils/constants/colors";

const ServicemenCard = props => {

    const { data, selectIsAuth, updateHits, navigation } = props;


    const onButton = data => {
        if (selectIsAuth) {
            updateHits(data.service_provider_id);
            Linking.openURL(`tel:+91${data.contact_data[0]}`)
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>{data.sp_name}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detail}>
                        <Text style={styles.label}>Work Experience</Text>
                        <Text style={styles.value}>{data.service_start_date}</Text>
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.label}>People Contacted</Text>
                        <Text style={styles.value}>{data.CONTACT_HITS}</Text>
                    </View>
                </View>
                {data.sp_specialization && data.sp_specialization.length && data.sp_specialization !== "NA" &&
                    <View style={styles.specialization}>
                        <Text style={styles.label}>Description</Text>
                        <Text style={styles.value}>{data.sp_specialization}</Text>
                    </View>
                }
            </View>
            <View style={styles.right}>
                <TouchableOpacity onPress={() => onButton(data)}>
                    <View style={styles.callButton}>
                        <Icon name="phone" size={20} color={Colors.blue} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default ServicemenCard;