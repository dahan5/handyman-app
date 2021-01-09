import React from "react";

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from "./index.styles";

const Dropdown = props => {

    const {
        value, style = {}, onValueChange, enabled, type = 'off', label,
        autoFocus, editable, multiline, showEdit = false, onClickEdit
    } = props;

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text >{label}</Text>
            </View>
            <TextInput
                onChangeText={onValueChange}
                type='tel'
                value={value}
                style={{ ...styles.textInput, ...style }}
                enabled={enabled && true}
                type={type}
                autoFocus={autoFocus || true}
                clearButtonMode='always'
                editable={editable && true}
                multiline={multiline || false}
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