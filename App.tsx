import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

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

function IntegratedTabs() {
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
            <Drawer.Navigator initialRouteName="IntegratedTabs">
                <Drawer.Screen
                    name="IntegratedTabs"
                    component={IntegratedTabs}
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
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;