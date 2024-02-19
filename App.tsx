import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile!</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            {/* Add your settings content here */}
        </View>
    );
}

const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
    return (
        <BottomTab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato' }}
        >
            <BottomTab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function TopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Feed" component={Feed} />
            <TopTab.Screen name="Notifications" component={Notifications} />
            <TopTab.Screen name="Profile" component={Profile} />
        </TopTab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="BottomTabs">
                <Drawer.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={({ navigation }) => ({
                        title: 'Aussie Simplify',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                                <MaterialCommunityIcons
                                    name="menu"
                                    size={24}
                                    style={{ marginLeft: 15 }}
                                />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Drawer.Screen
                    name="TopTabs"
                    component={TopTabs}
                    options={{ title: 'Top Tabs' }}
                />
                <Drawer.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: 'Settings' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;