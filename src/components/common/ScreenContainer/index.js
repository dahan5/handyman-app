import React from 'react';

import { ScrollView } from 'react-native';
import Footer from '../Footer';

const ScreenContainer = props => {
    const { children, style, showsVerticalScrollIndicator } = props;
    return (
        <ScrollView
            style={style || {}}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
        >
            {children}
            <Footer />
        </ScrollView>
    )
}

export default ScreenContainer