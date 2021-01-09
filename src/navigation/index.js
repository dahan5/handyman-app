import React from 'react';
import { useSelector } from "react-redux";

import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from 'react-native-gesture-handler';

import { selectIsAuth } from "../redux/user/selectors";
import HomeScreen, { HomeOptions } from "../screens/HomeScreen";
import ListProvidersScreen, { ListProvidersOptions } from "../screens/ListProvidersScreen";
import SelectedFilterScreen, { SelectedFilterOptions } from "../screens/SelectedFilterScreen";
import LoginModal from "../components/modals/Login";

const MainStack = ({ navigation }) => {

    const isAuth = useSelector(selectIsAuth);

    const Stack = createStackNavigator();

    const showLoginButton = () => {
        return !isAuth && <TouchableOpacity
            style={{ paddingRight: 25 }}
            onPress={() => navigation.navigate('Login')}
        >
            <Text>Login/SignUp</Text>
        </TouchableOpacity>
    }

    return (
        <Stack.Navigator screenOptions={{ headerRight: showLoginButton }} mode="card">
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={HomeOptions}
            />
            <Stack.Screen
                name='SelectFilters'
                component={SelectedFilterScreen}
                options={SelectedFilterOptions}
            />
            <Stack.Screen
                name='ListProviders'
                component={ListProvidersScreen}
                options={ListProvidersOptions}
            />
        </Stack.Navigator>
    )
}

const Navigator = props => {
    const Root = createStackNavigator();
    return <NavigationContainer>
        <Root.Navigator mode="modal" screenOptions={{ animationEnabled: false }}>
            <Root.Screen
                name="Main"
                component={MainStack}
                options={{ headerShown: false }}
            />
            <Root.Screen
                name="Login"
                component={LoginModal}
                options={{ headerShown: false, animationEnabled: true }}
            />
        </Root.Navigator>
    </NavigationContainer>
}

export default Navigator;