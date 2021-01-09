import React, { useEffect, useState } from "react";

import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';

import { styles } from "./index.styles";

const Dropdown = props => {

    const {
        value, style = {}, onValueChange, enabled, options, mode,
        uniqueKey, display, marathi, label
    } = props;

    const [showAny, setShowAny] = useState(!value)

    const onHandleChange = item => {
        if (item !== null)
            onValueChange(item);
    }

    useEffect(() => {
        setShowAny(!value)
    }, [value])

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text >{label}</Text>
            </View>
            {options.length
                ? <Picker
                    selectedValue={value}
                    style={{ ...styles.dropdown, ...style }}
                    onValueChange={item => onHandleChange(item)}
                    enabled={enabled}
                    mode={mode || 'dialog'}
                >
                    {showAny &&
                        <Picker.Item enabled={false} key='unselectable' value={null} label='Select One' style={styles.default} />
                    }
                    {options.map((option, index) => (
                        <Picker.item
                            key={option[uniqueKey]}
                            label={`${option[display]} ${!!marathi ? `(${option[marathi]})` : ""}`}
                            value={option[uniqueKey]}
                        />
                    ))}
                </Picker>
                : <Picker
                    selectedValue={value}
                    style={{ ...styles.dropdown, ...style }}
                    onValueChange={item => onHandleChange(item)}
                    enabled={enabled}
                    mode={mode || 'dialog'}
                >
                    <Picker.Item enabled={false} key='unselectable' value={null} label='Select One' style={styles.default} />
                </Picker>
            }
        </View>
    )
}

export default Dropdown