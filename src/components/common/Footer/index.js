import React from "react";

import { View, Text, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import { styles } from "./index.style";

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.socialContainer}>
                <Icon
                    size={32}
                    name="facebook"
                    color="white"
                    style={styles.icon}
                    onPress={() => Linking.openURL('https://www.facebook.com/infohandymanservices')}
                />
                <Icon
                    size={32}
                    name="instagram"
                    color="white"
                    style={styles.icon}
                    onPress={() => Linking.openURL('https://www.instagram.com/infohandyman_service')}
                />
                <Icon
                    size={32}
                    name="twitter"
                    color="white"
                    style={styles.icon}
                    onPress={() => Linking.openURL('https://twitter.com/by_chs')}
                />
            </View>
            <View style={styles.copyright}>
                <Text style={styles.color}>COPYRIGHT @ CALLHANDYMAN SERVICES. All rights reserved</Text>
            </View>
        </View>
    )
}

export default Footer