import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { View, Text } from 'react-native';

import { styles } from "./index.styles"

const ListProvidersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>ListProvidersScreen</Text>
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProvidersScreen);