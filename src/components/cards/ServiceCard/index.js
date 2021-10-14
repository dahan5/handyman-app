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
                    source={{ uri: item['web_icon_s3_loc'] }}
                    style={styles.image}
                    imageStyle={{
                        resizeMode: "contain",
                    }}
                />
                <Text numberOfLines={1} style={styles.text}>{item['service_name']}</Text>
                {/* {item['service_name_mr'] &&
                    <Text numberOfLines={1} style={{ ...styles.text, ...styles.subtext }}>({item['service_name_mr']})</Text>
                } */}
            </View>
        </TouchableOpacity>
    )
}


export default ServiceCard;