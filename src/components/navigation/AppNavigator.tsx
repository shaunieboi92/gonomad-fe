import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabs from "./HomeTabs";
import TripDetailScreen from "../../screens/trips/TripDetailScreen";
import HomeScreen from "../../screens/HomeScreen";
import AddToTripScreen from "../../screens/trips/AddToTripScreen";

export type RootStackParamList = {
  HomeTabs: undefined;
  TripDetail: {
    city: string;
    startDate: string;
    endDate: string;
  };
  AddToTrip: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
   <Stack.Navigator >
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      <Stack.Screen name="TripDetail" component={TripDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="AddToTrip"
        component={AddToTripScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
