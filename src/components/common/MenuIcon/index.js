import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "react-native-vector-icons";

import { styles } from "./index.styles";

const MenuIcon = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.container}
        >
            <Feather name="menu" size={24} />
        </TouchableOpacity>
    )
}

export default MenuIcon