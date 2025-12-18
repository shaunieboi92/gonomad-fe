import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabs from "./HomeTabs"; // Import HomeTabs, not HomeScreen
import TripDetailScreen from "../../screens/TripDetailScreen";

export type RootStackParamList = {
  HomeTabs: undefined;
  TripDetail: {
    city: string;
    startDate: string;
    endDate: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs} // Changed from HomeScreen to HomeTabs
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
          options={{
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
