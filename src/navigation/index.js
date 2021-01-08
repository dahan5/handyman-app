import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ListProvidersScreen from "../screens/ListProvidersScreen";
import SelectedFilterScreen from "../screens/SelectedFilterScreen";

const Navigator = createStackNavigator({
    Home: HomeScreen,
    SelectFilters: SelectedFilterScreen,
    ListProviders: ListProvidersScreen
});

export default createAppContainer(Navigator);