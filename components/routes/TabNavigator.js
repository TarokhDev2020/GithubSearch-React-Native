import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator, ConnectedSearchStack, FavoritesStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions = {{
            inactiveTintColor: "black",
            activeTintColor: "#7158e2"
        }} screenOptions = {({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? "star-outline" : "star-outline"
                }
                else if (route.name === "Search") {
                    iconName = focused ? "search-outline" : "search-outline"
                }
                else if (route.name === "Favorites") {
                    iconName = focused ? "heart-outline" : "heart-outline";
                }
                return <Icon name = {iconName} color = {color} size = {size} />
            }
        })}>
            <Tab.Screen name = "Home" component = {HomeStackNavigator} options = {{
                title: "Latest"
            }} />
            <Tab.Screen name = "Search" component = {ConnectedSearchStack} />
            <Tab.Screen name = "Favorites" component = {FavoritesStackNavigator} />
        </Tab.Navigator>
    )
};

export default MainTabNavigator;