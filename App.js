import React, { useState } from 'react';
import { Provider } from 'react-redux';

import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import store from "./src/redux/store";
import Navigator from "./src/navigation/"

const fetchFonts = () => {
    Font.loadAsync({
        'nunito-sans': require('./assets/Fonts/NunitoSans-Regular.ttf'),
        'nunito-sans-bold': require('./assets/Fonts/NunitoSans-Bold.ttf')
    })
}

const App = () => {

    const [resourcesLoaded, setResourcesLoaded] = useState(false);

    if (resourcesLoaded) {
        return (
            <Provider store={store}>
                <StatusBar style="auto" />
                <Navigator />
            </Provider>
        );
    } else {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setResourcesLoaded(true)}
                onError={(err) => console.log(err)}
            />
        )
    }
}

export default (App)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
