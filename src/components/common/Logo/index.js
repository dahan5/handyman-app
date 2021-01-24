import React from "react";

import { View, Image } from "react-native";

import { styles } from "./index.styles";
import headerImage from "../../../../assets/images/infohandyman.png";

const Logo = () => {
    return (
        <View style={styles.titleContainer}>
            <Image source={headerImage} style={styles.titleImage} />
        </View>
    )
}

export default Logo