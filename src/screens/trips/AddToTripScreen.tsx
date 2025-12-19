import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import createTripStyles from "../../styles/tripStyles";
import { useTheme } from "../../contexts/ThemeContext";

const OPTIONS = {
  popular: [
    { label: "Flight", icon: "airplane", route: "AddFlight" },
    { label: "Accommodation", icon: "bed", route: "AddAccommodation" },
    { label: "Meeting", icon: "laptop", route: "AddMeeting" },
  ],
  more: [
    { label: "Activity", icon: "walk" },
    { label: "Car Rental", icon: "car" },
    { label: "Cruise", icon: "boat" },
    { label: "Directions", icon: "navigate" },
    { label: "Map", icon: "map" },
  ],
};

export default function AddToTripScreen({ route }: { route: any }) {
  const { colors } = useTheme();
  const tripStyles = createTripStyles(colors);
  const navigation = useNavigation<any>();
  const { onSaveFlight } = route.params || {};

  return (
    <SafeAreaView style={tripStyles.container}>
      {/* Header */}
      <View style={tripStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>

        <Text style={tripStyles.headerTitle}>Add To Trip</Text>
      </View>

      <ScrollView>
        {/* Most Popular */}
        <Text style={tripStyles.sectionTitle}>Most Popular</Text>

        {OPTIONS.popular.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={tripStyles.row}
            onPress={() => {
              if (item.route) {
                navigation.navigate(item.route, { onSaveFlight });
              }
            }}
          >
            <View style={tripStyles.iconCircle}>
              <Ionicons
                name={item.icon as any}
                size={22}
                color="#FFFFFF"
              />
            </View>
            <Text style={tripStyles.rowText}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        {/* More */}
        <Text style={tripStyles.sectionTitle}>More</Text>

        {OPTIONS.more.map((item, idx) => (
          <TouchableOpacity key={idx} style={tripStyles.row}>
            <View style={tripStyles.iconCircle}>
              <Ionicons
                name={item.icon as any}
                size={22}
                color="#FFFFFF"
              />
            </View>
            <Text style={tripStyles.rowText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
