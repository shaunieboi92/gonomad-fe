import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../components/navigation/AppNavigator";
import styles from "../styles/styles";

type Props = {
  route: RouteProp<RootStackParamList, "TripDetail">;
};

const TripDetailScreen = ({ route }: Props) => {
  const { city, startDate, endDate } = route.params;

  const [itinerary, setItinerary] = useState([
    { day: "Day 1", items: ["Check-in", "Evening food nearby"] },
    { day: "Day 2", items: ["Grand Palace", "Wat Pho"] },
    { day: "Day 3", items: [] },
  ]);

  const popularSuggestions = [
    "Wat Arun",
    "Chinatown food crawl",
    "Weekend market",
    "Rooftop bar area",
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.dates}>
          {startDate} – {endDate}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Your itinerary</Text>

      {itinerary.map((day, index) => (
        <View key={index} style={styles.dayCard}>
          <Text style={styles.dayTitle}>{day.day}</Text>

          {day.items.length === 0 ? (
            <Text style={styles.emptyText}>Free day</Text>
          ) : (
            day.items.map((item, idx) => (
              <View key={idx} style={styles.itemRow}>
                <Ionicons name="location-outline" size={16} color="#6B7280" />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))
          )}

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={16} color="#14B8A6" />
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Commonly added to trips like this</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularSuggestions.map((item, idx) => (
          <View key={idx} style={styles.suggestionCard}>
            <Text style={styles.suggestionText}>{item}</Text>
            <TouchableOpacity style={styles.suggestionAdd}>
              <Ionicons name="add" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default TripDetailScreen;
