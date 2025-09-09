import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";
import Layout from "./screens/Layout";
import Home from "./screens/Home.js";


import Profile from "./screens/Profile.js";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
          tabBarIcon: () => (
            <AntDesign name="home" color="darkblue" size={24} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Demo"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <AntDesign name="layout" color="darkblue"size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ----- Drawer with Tabs inside -----
export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name="Main"
          component={MyTabs}
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="home" color="darkblue" size={24} />
            ),
          }}
        />
       
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerLabel: "Profile",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="layout" color="darkblue" size={24} />
            ),
          }}
        />
         <Drawer.Screen
          name="Layout"
          component={Layout}
          options={{
            drawerLabel: "Layout",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="windowso" color="darkblue" size={24} />
            ),
          }}
        />
      </Drawer.Navigator>
  );
}
