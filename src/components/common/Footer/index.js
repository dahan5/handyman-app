import React from "react";

import { View, Text } from "react-native";

import { styles } from "./index.style";

const Footer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.copyright}>
                <Text>COPYRIGHT @ CALLHANDYMAN SERVICES. All rights reserved</Text>
            </View>
        </View>
    )
}

export default Footer