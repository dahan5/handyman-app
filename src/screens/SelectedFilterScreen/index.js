import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { View, Text, Button } from 'react-native';

import { styles } from "./index.styles"

const SelectedFilterScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>SelectedFilterScreen</Text>
            <Button title='navigate' onPress={() => props.navigation.navigate({ routeName: 'ListProviders' })} />
        </View>
    )
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilterScreen);