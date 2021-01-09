import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { StatusBar } from 'expo-status-bar';

import { read, clear } from "./src/utils/services/auth";
import store from "./src/redux/store";
import Navigator from "./src/navigation/";

const fetchFonts = () => {
    Font.loadAsync({
        'nunito-sans': require('./assets/Fonts/NunitoSans-Regular.ttf'),
        'nunito-sans-bold': require('./assets/Fonts/NunitoSans-Bold.ttf')
    })
}

const App = () => {

    const [resourcesLoaded, setResourcesLoaded] = useState(false);

    useEffect(() => {
        clear();
    }, [])

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

export default App