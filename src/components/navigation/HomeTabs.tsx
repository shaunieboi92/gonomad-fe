import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { RouteProp } from "@react-navigation/native";

export type HomeTabParamList = {
  Explore: undefined;
  Profile: undefined;
  Trips: undefined;
  Wishlists: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
      }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#14B8A6",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName: any = "home";

          switch (route.name) {
            case "Explore":
              iconName = "search";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
            case "Trips":
              iconName = "map-outline";
              break;
            case "Wishlists":
              iconName = "heart-outline";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Explore" component={HomeScreen} />
      <Tab.Screen name="Wishlists" component={HomeScreen} />
      <Tab.Screen name="Trips" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
