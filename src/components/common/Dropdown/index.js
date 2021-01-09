import React from "react";

import { View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import Icon from "react-native-vector-icons/Entypo"

import { styles } from "./index.styles";
import Colors from "../../../utils/constants/colors";

const DropdownComponent = props => {

    const {
        value, style = {}, onValueChange, enabled = true, options, mode,
        uniqueKey, display, marathi, label
    } = props;

    return (
        <View style={styles.container}>
            <Dropdown
                label={label}
                data={options}
                onChangeText={item => onValueChange(item)}
                labelExtractor={item => `${item[display]}${!!marathi ? ` (${item[marathi]})` : ""}`}
                valueExtractor={item => item[uniqueKey]}
                labelFontSize={16}
                iconColor={Colors.primaryTextColor}
                itemColor={Colors.secondaryTextColor}
                selectedItemColor={Colors.primaryTextColor}
                disabled={!enabled}
                itemCount={6}
                value={value}
                renderAccessory={() => { }}
            />
        </View>
    )
}

export default DropdownComponent