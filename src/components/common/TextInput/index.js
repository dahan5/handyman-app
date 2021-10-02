import React from "react";

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from "./index.styles";

const Dropdown = props => {

    const {
        value, style = {}, onValueChange, enabled, type = 'off', label,
        autoFocus, editable, multiline, showEdit = false, onClickEdit,
        keyboardType = "default", labelStyle = {}, autoCapitalize = "none"
    } = props;

    return (
        <View style={styles.container}>
            <View style={{ ...styles.label, labelStyle }}>
                <Text >{label}</Text>
            </View>
            <TextInput
                onChangeText={onValueChange}
                type='tel'
                autoCapitalize={autoCapitalize}
                value={value}
                style={{ ...styles.textInput, ...style }}
                enabled={enabled && true}
                type={type}
                autoFocus={autoFocus || false}
                clearButtonMode='always'
                editable={editable && true}
                multiline={multiline || false}
                keyboardType={keyboardType}
            />
            {showEdit &&
                <View style={styles.editIcon}>
                    <TouchableOpacity onPress={onClickEdit}>
                        <View style={styles.editTextCon}>
                            <Text>Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Dropdown