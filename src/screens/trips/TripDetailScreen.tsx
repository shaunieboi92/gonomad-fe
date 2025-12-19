import React from "react";
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
        note: "Arrival: Mon 22 Dec, 06:05 GMT+3",
      },
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
      },
      {
        time: undefined,
        icon: "car",
        title: "Hertz",
        subtitle: "Drop off: 12:00 CET",
        note: "Prague International Airport (PRG)",
      },
      {
        time: undefined,
        icon: "bed",
        title: "Airbnb",
        subtitle: "Check in: 15:00 CET",
        note: undefined,

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
      },
    ],
  },
];

export default function TripDetailScreen() {
   const { colors } = useTheme();
  const tripStyles = createTripStyles(colors);
  const navigation = useNavigation<any>();

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

              {section.items.map((item, index) => (
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
                    <View style={tripStyles.verticalLine} />
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
                    {item.note && (
                      <Text style={tripStyles.note}>{item.note}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

     {/* Floating Action Button */}
      <TouchableOpacity
        style={tripStyles.fab}
        onPress={() => navigation.navigate("AddToTrip")}
      >
        <Ionicons name="add" size={28} color="#0F172A" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
