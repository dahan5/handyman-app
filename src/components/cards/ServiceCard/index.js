import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from "./index.styles";

const ServiceCard = props => {

    const { item, navigation, setItem } = props;

    const onItemPress = () => {
        setItem(item);
        navigation.navigate({ routeName: 'ListProviders' });
    }

    return (
        <TouchableOpacity onPress={onItemPress} style={styles.container}>
            <View>
                <Image source={{ uri: item['MOB_ICON_S3_LOC'] }} style={styles.image} />
                <Text numberOfLines={1} style={styles.text}>{item['SERVICE_NAME']}</Text>
                {item['SERVICE_NAME_MR'] &&
                    <Text numberOfLines={1} style={{...styles.text, ...styles.subtext}}>({item['SERVICE_NAME_MR']})</Text>
                }
            </View>
        </TouchableOpacity>
    )
}


export default ServiceCard;