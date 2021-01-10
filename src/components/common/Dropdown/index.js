import React from "react";

import { View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import Icon from "react-native-vector-icons/Feather";

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
                fontSize={18}
                iconColor={Colors.primaryTextColor}
                itemColor={Colors.secondaryTextColor}
                selectedItemColor={Colors.primaryTextColor}
                pickerStyle={{ backgroundColor: Colors.secondaryBackgroundColor }}
                disabled={!enabled}
                itemCount={10}
                shadeOpacity={0}
                value={value}
                renderAccessory={() => (
                    <View>
                        <Icon name="chevron-down" size={16} color={Colors.primaryTextColor} />
                    </View>
                )}
            />
        </View>
    )
}

export default DropdownComponent