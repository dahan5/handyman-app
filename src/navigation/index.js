import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import _get from "lodash/get";

import Animated from "react-native-reanimated";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator, DrawerItemList,
    DrawerContentScrollView, DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/EvilIcons"

import Colors from "../utils/constants/colors";
import { selectIsAuth, selectLoggedInUser } from "../redux/user/selectors";
import { logout } from "../redux/user/actions";
import HomeScreen, { HomeOptions } from "../screens/HomeScreen";
import ListProvidersScreen, { ListProvidersOptions } from "../screens/ListProvidersScreen";
import SelectedFilterScreen, { SelectedFilterOptions } from "../screens/SelectedFilterScreen";
import AboutUsScreen, { AboutUsOptions } from "../screens/AboutUs"
import LoginModal from "../components/modals/Login";

const AuthButton = ({ navigation }) => {
    const isAuth = useSelector(selectIsAuth);

    return (
        isAuth
            ? <TouchableOpacity
                style={{ paddingRight: 20 }}
                onPress={() => { }}
            >
                <Icon name="bell" size={28} />
            </TouchableOpacity>
            : <TouchableOpacity
                style={{ paddingRight: 25 }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: Colors.blue }}>Login/SignUp</Text>
            </TouchableOpacity>
    )
}

const AboutUsStack = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => <AuthButton navigation={navigation} />
            }}
        >
            <Stack.Screen
                name="AboutUs"
                component={AboutUsScreen}
                options={AboutUsOptions}
            />
        </Stack.Navigator>
    )
}

const ServiceStack = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => <AuthButton navigation={navigation} />
            }}
        >
            <Stack.Screen
                name='Services'
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

const CustomDrawerContent = ({ progress, ...rest }) => {
    const isAuth = useSelector(selectIsAuth);
    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch();

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    const signOut = () => {
        dispatch(logout.request());
        rest.navigation.navigate('Services');
    }

    const header = () => {
        return (
            isAuth
                ? <View style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    paddingLeft: 15,
                    alignItems: 'center'
                }}>
                    <Text numberOfLines={1} >Hi, {_get(user, 'mobile')}</Text>
                    <Icon name="user" size={32} />
                </View>
                : <TouchableOpacity onPress={() => rest.navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
        )
    }

    return (
        <DrawerContentScrollView {...rest}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <DrawerItem
                    label={header}
                    // onPress={() => rest.navigation.navigate('Login')}
                    style={{
                        borderBottomWidth: 1,
                        borderRadius: 0,
                        marginHorizontal: 0,
                        marginBottom: 0,
                        width: '100%',
                    }}
                />
                <ScrollView style={{ height: Dimensions.get('window').height - 120 }}>
                    <DrawerItemList {...rest} />
                </ScrollView>
                {isAuth &&
                    <View style={{ borderTopWidth: 1, borderColor: Colors.primaryTextColor }}>
                        <DrawerItem label="Logout" onPress={signOut} />
                    </View>
                }
            </Animated.View>
        </DrawerContentScrollView>
    );
}

const MainDrawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            edgeWidth={60}
            drawerContentOptions={{
                activeTintColor: Colors.primaryBackgroundColor,
                activeBackgroundColor: Colors.blue,
                labelStyle: {
                    fontSize: 16,
                },
                itemStyle: {
                    borderRadius: 0,
                    marginHorizontal: 0,
                    paddingLeft: 10,
                    borderBottomWidth: 1,
                    borderColor: Colors.borderColor,
                    marginVertical: 0,
                    paddingVertical: 5
                },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="ServiceStack"
                component={ServiceStack}
                options={{ headerShown: false, drawerLabel: 'Services' }}
            />
            <Drawer.Screen
                name="AboutUsStack"
                component={AboutUsStack}
                options={{ drawerLabel: 'About Us' }}
            />
        </Drawer.Navigator>
    )
}

const Navigator = () => {
    const Root = createStackNavigator();
    return (
        <NavigationContainer>
            <Root.Navigator mode="modal" screenOptions={{ animationEnabled: false }}>
                <Root.Screen
                    name="MainDrawer"
                    component={MainDrawer}
                    options={{ headerShown: false }}
                />
                <Root.Screen
                    name="Login"
                    component={LoginModal}
                    options={{ headerShown: false, animationEnabled: true }}
                />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;