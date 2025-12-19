

import AppNavigator from "./src/components/navigation/AppNavigator";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}