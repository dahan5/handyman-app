import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import Animated from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator, DrawerItemList,
  DrawerContentScrollView, DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./index.styles";
import Colors from "../utils/constants/colors";
import {
  selectIsAuth, selectLoggedInUser,
  selectUserProfile, selectIsAdmin
} from "../redux/user/selectors";
import { logout } from "../redux/user/actions";
import LoginModal from "../components/modals/Login";
import HomeScreen, { HomeOptions } from "../screens/HomeScreen";
import ListProvidersScreen, { ListProvidersOptions } from "../screens/ListProvidersScreen";
import SelectedFilterScreen, { SelectedFilterOptions } from "../screens/SelectedFilterScreen";
import UserProfile, { UserProfileOptions } from "../screens/UserProfile";
import ProfileForm, { ProfileFormOptions } from "../screens/ProfileForm";
import UserServices, { UserServicesOptions } from "../screens/UserServices";
import UserServicesForm, { UserServicesFormOptions } from "../screens/UserServicesForm";
import AboutUsScreen, { AboutUsOptions } from "../screens/AboutUs";
import ConditionsScreen, { ConditionsOptions } from "../screens/Conditions";
import ContactUsScreen, { ContactUsOptions } from "../screens/ContactUs";

const AuthButton = ({ navigation }) => {
  const isAuth = useSelector(selectIsAuth);
  return (isAuth
    ? <TouchableOpacity
      style={styles.notification}
    >
      <Icon name="notifications-outline" size={24} />
    </TouchableOpacity>
    : <TouchableOpacity
      style={styles.notification}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.blueText}>Login/SignUp</Text>
    </TouchableOpacity>
  )
}

const WithAuthButton = ({ navigation, screens = [] }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <AuthButton navigation={navigation} />
      }}
    >
      {screens.map(screen => <Stack.Screen key={screen.name} {...screen} />)}
    </Stack.Navigator>
  )
}

const AboutUsStack = ({ navigation }) => {
  const screens = [{
    name: "AboutUs",
    component: AboutUsScreen,
    options: AboutUsOptions
  }]
  return <WithAuthButton navigation={navigation} screens={screens} />
}

const ContactUsStack = ({ navigation }) => {
  const screens = [{
    name: "ContactUs",
    component: ContactUsScreen,
    options: ContactUsOptions
  }]
  return <WithAuthButton navigation={navigation} screens={screens} />
}

const ConditionsStack = ({ navigation }) => {
  const screens = [{
    name: "Conditions",
    component: ConditionsScreen,
    options: ConditionsOptions
  }]
  return <WithAuthButton navigation={navigation} screens={screens} />
}

const ServiceStack = ({ navigation }) => {
  const screens = [{
    name: 'Services',
    component: HomeScreen,
    options: HomeOptions
  }, {
    name: 'SelectFilters',
    component: SelectedFilterScreen,
    options: SelectedFilterOptions
  }, {
    name: 'ListProviders',
    component: ListProvidersScreen,
    options: ListProvidersOptions
  }]
  return <WithAuthButton navigation={navigation} screens={screens} />
}

const UserProfileStack = ({ navigation }) => {
  const userProfile = useSelector(selectUserProfile);
  const screens = [{
    name: 'UserProfile',
    component: UserProfile,
    options: UserProfileOptions
  }, {
    name: 'ProfileForm',
    component: ProfileForm,
    options: ProfileFormOptions
  }]
  return (
    <WithAuthButton
      navigation={navigation}
      screens={_isEmpty(userProfile) ? screens.reverse() : screens}
    />
  )
}

const UserServiceStack = ({ navigation }) => {
  const screens = [{
    name: 'UserServices',
    component: UserServices,
    options: UserServicesOptions
  }, {
    name: 'UserServicesForm',
    component: UserServicesForm,
    options: UserServicesFormOptions
  }]
  return <WithAuthButton navigation={navigation} screens={screens} />
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

  const header = () => isAuth
    ? <View style={styles.drawerHeader}>
      <Text numberOfLines={1} >Hi, {_get(user, 'mobile')}</Text>
      <Icon name="person-circle-outline" size={24} />
    </View>
    : <TouchableOpacity onPress={() => rest.navigation.navigate('Login')}>
      <View style={styles.drawerHeader}>
        <Text>Login</Text>
        <Icon name="log-in-outline" size={24} />
      </View>
    </TouchableOpacity>

  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItem label={header} style={styles.header} />
        <ScrollView style={styles.scrollContainer}>
          <DrawerItemList {...rest} />
        </ScrollView>
        {isAuth &&
          <View style={styles.logoutView}>
            <DrawerItem
              label="Logout"
              onPress={signOut}
              icon={({ color, size }) => <Icon color={color} size={size} name={'log-out-outline'} />}
            />
          </View>
        }
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const MainDrawer = () => {
  const Drawer = createDrawerNavigator();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const userProfile = useSelector(selectUserProfile);
  const showProfile = !isAdmin && isAuth;
  const showServices = !isAdmin && !_isEmpty(userProfile) && userProfile.ser_prof_appr_status === 'APPROVED';
  const profileSubText = _isEmpty(userProfile) ? 'add' : userProfile.ser_prof_appr_status.toLowerCase();
  const icon = profileSubText === 'add' ? 'person-add-outline' : 'person-outline';
  const color = profileSubText === 'add'
    ? '#212121'
    : (profileSubText === 'pending'
      ? ''
      : (profileSubText === 'rejected'
        ? Colors.red
        : '#03D269'));

  const profileTitle = focused => (
    <View style={styles.profileTitle}>
      <Text style={styles.text(focused)}>Profile</Text>
      <Text style={styles.profileStatus(color)}>{profileSubText}</Text>
    </View>
  )

  const screens = [{
    name: "ServiceStack",
    component: ServiceStack,
    options: {
      headerShown: false,
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={'home-outline'} />,
      drawerLabel: 'Home'
    }
  }, {
    name: "ContactUsStack",
    component: ContactUsStack,
    options: {
      drawerLabel: 'Contact Us',
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={'call-outline'} />,
    }
  }, {
    name: "ConditionsStack",
    component: ConditionsStack,
    options: {
      drawerLabel: 'Terms & Conditions',
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={'document-outline'} />,
    }
  }, {
    name: "AboutUsStack",
    component: AboutUsStack,
    options: {
      drawerLabel: 'About Us',
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={'people-outline'} />,
    }
  }]

  if (showProfile) screens.splice(1, 0, {
    name: "UserProfileStack",
    component: UserProfileStack,
    options: {
      headerShown: false,
      drawerLabel: ({ focused }) => profileTitle(focused),
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={icon} />,
    }
  })
  if (showServices) screens.splice(2, 0, {
    name: "UserServiceStack",
    component: UserServiceStack,
    options: {
      headerShown: false,
      drawerLabel: 'My Services',
      drawerIcon: ({ color, size }) => <Icon color={color} size={size - 4} name={'construct-outline'} />,
    }
  })

  return (
    <Drawer.Navigator
      edgeWidth={60}
      drawerContentOptions={{
        activeTintColor: Colors.primaryBackgroundColor,
        activeBackgroundColor: Colors.blue,
        labelStyle: styles.labelStyle,
        itemStyle: styles.itemStyle,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      {screens.map(screen => <Drawer.Screen key={screen.name} {...screen} />)}
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
