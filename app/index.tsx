import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  UserPen, House } from 'lucide-react-native';

import Layout from "./screens/Layout";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register"


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "darkblue",
        tabBarLabelStyle: { fontSize: 13 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () =>  <House   color="darkblue" size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <UserPen  color="darkblue" size={24} />,
        }}
      />
       <Tab.Screen
        name="Layout"
        component={Layout}
        options={{
          tabBarLabel: "Layout",
          tabBarIcon: () => <House  color="darkblue" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={MyTabs}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <House  color="darkblue" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          // drawerIcon: () => <AntDesign name="contacts" color="darkblue" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Layout"
        component={Layout}
        options={{
          drawerLabel: "Layout",
          // drawerIcon: () => <AntDesign name="layout" color="darkblue" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
}

// --- Root Stack ---
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      </Stack.Navigator>
  );
}