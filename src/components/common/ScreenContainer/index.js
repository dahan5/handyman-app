import React from 'react';

import { ScrollView, View, Dimensions } from 'react-native';

import Footer from '../Footer';

const { width, height } = Dimensions.get('window');

const ScreenContainer = props => {
    const { children, style, showsVerticalScrollIndicator } = props;
    return (
        <ScrollView
            style={style || {}}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
        >
            <View style={{ minHeight: (height - 163) }}>
                {children}
            </View>
            <Footer />
        </ScrollView>
    )
}

export default ScreenContainer