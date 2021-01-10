import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from "./index.styles";

const ServiceCard = props => {

    const { item, navigation } = props;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('SelectFilters', { item: item })}
            style={styles.container}
        >
            <View>
                <Image
                    source={{ uri: item['MOB_ICON_S3_LOC'] }}
                    style={styles.image}
                    imageStyle={{
                        resizeMode: "contain",
                    }}
                />
                <Text numberOfLines={1} style={styles.text}>{item['SERVICE_NAME']}</Text>
                {item['SERVICE_NAME_MR'] &&
                    <Text numberOfLines={1} style={{ ...styles.text, ...styles.subtext }}>({item['SERVICE_NAME_MR']})</Text>
                }
            </View>
        </TouchableOpacity>
    )
}


export default ServiceCard;