import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import createTripStyles from "../../styles/tripStyles";
import { useTheme } from "../../contexts/ThemeContext";

const TIMELINE = [
  {
    day: "Sunday 21 Dec",
    items: [
      {
        time: "23:25",
        icon: "airplane",
        title: "SIN → IST",
        subtitle: "TK 55 · Turkish Airlines",
        arrivalTime: "Mon 22 Dec, 06:05 GMT+3",
        note: undefined,},
    ],
  },
  {
    day: "Monday 22 Dec",
    items: [
      {
        time: undefined,
        icon: "car",
        title: "Hertz",
        subtitle: "Pick up: 12:00 CET",
        note: "Prague International Airport (PRG)",
                arrivalTime: undefined,

      },
      {
        time: undefined,
        icon: "car",
        title: "Hertz",
        subtitle: "Drop off: 12:00 CET",
        note: "Prague International Airport (PRG)",
                arrivalTime: undefined,

      },
      {
        time: undefined,
        icon: "bed",
        title: "Airbnb",
        subtitle: "Check in: 15:00 CET",
        note: undefined,
        arrivalTime: undefined,

      },
    ],
  },
  {
    day: "Tuesday 23 Dec",
    items: [
      {
        time: "12:00",
        icon: "walk",
        title: "Prague Castle",
        subtitle: "Historic landmark",
        note: undefined,
                arrivalTime: undefined,

      },
    ],
  },
];

export default function TripDetailScreen() {
  const { colors } = useTheme();
  const tripStyles = createTripStyles(colors);
  const navigation = useNavigation<any>();
  const [timeline, setTimeline] = useState(TIMELINE);

  const addFlightToTimeline = (flight: any) => {
    // Add to first day for simplicity
    setTimeline(prev => {
      const newTimeline = [...prev];
      newTimeline[0].items.push(flight);
      return newTimeline;
    });
  };


  return (
    <SafeAreaView style={tripStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tripStyles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={tripStyles.headerActions}>
            <TouchableOpacity>
              <Ionicons name="share-social-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Trip Info */}
        <View style={tripStyles.tripInfo}>
          <Text style={tripStyles.tripTitle}>Prague 2025</Text>
          <Text style={tripStyles.tripDates}>
            Sun, 21 Dec 2025 – Sat, 3 Jan 2026
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800",
          }}
          style={tripStyles.coverImage}
        />

        {/* Timeline */}
        <View style={tripStyles.timeline}>
          {TIMELINE.map((section, idx) => (
            <View key={idx}>
              <Text style={tripStyles.dayLabel}>{section.day}</Text>

              {section.items.map((item, index) => {
                const isLastItem = index === section.items.length - 1;
                return (
                <View key={index} style={tripStyles.timelineItem}>
                  {/* Line */}
                  <View style={tripStyles.lineContainer}>
                    <View style={tripStyles.lineDot}>
                      <Ionicons
                        name={item.icon as any}
                        size={16}
                        color="#FFFFFF"
                      />
                    </View>
                    {!isLastItem && <View style={tripStyles.verticalLine} />}
                  </View>

                  {/* Content */}
                  <View style={tripStyles.itemContent}>
                    {item.time && (
                      <Text style={tripStyles.time}>{item.time}</Text>
                    )}
                    <Text style={tripStyles.itemTitle}>{item.title}</Text>
                    {item.subtitle && (
                      <Text style={tripStyles.subtitle}>{item.subtitle}</Text>
                    )}
                     {item.arrivalTime && (
                      <Text style={tripStyles.note}>Arrival: {item.arrivalTime}</Text>
                    )}
                    {item.note && (
                      <Text style={tripStyles.note}>{item.note}</Text>
                    )}
                  </View>
                </View>
              );
              })}
            </View>
          ))}
        </View>
      </ScrollView>

     {/* Floating Action Button */}
      <TouchableOpacity
        style={tripStyles.fab}
        onPress={() => navigation.navigate("AddToTrip", {
          onSaveFlight: (newFlight: any) => {
            setTimeline(prev => {
              const updated = [...prev];
              
              // Format the flight's date to match day labels
              const flightDate = new Date(newFlight.date);
              const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
              const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              const flightDayLabel = `${days[flightDate.getDay()]} ${flightDate.getDate()} ${months[flightDate.getMonth()]}`;
              
              // Find matching day or create new one
              const dayIndex = updated.findIndex(section => section.day === flightDayLabel);
              
              if (dayIndex >= 0) {
                // Add to existing day
                updated[dayIndex].items.push(newFlight);
              } else {
                // Create new day section
                updated.push({
                  day: flightDayLabel,
                  items: [newFlight]
                });
                // Sort by date
                updated.sort((a, b) => {
                  const dateA = new Date((a.items[0] as any).date || 0);
                  const dateB = new Date((b.items[0] as any).date || 0);
                  return dateA.getTime() - dateB.getTime();
                });
              }
              
              return updated;
            });
          },
        })}
      >
        <Ionicons name="add" size={28} color="#0F172A" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
