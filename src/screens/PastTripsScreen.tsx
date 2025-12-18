// src/screens/PastTripsScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface Trip {
  id: string;
  location: string;
  dates: string;
  image: string;
  year?: number; // Optional year marker
}

const PastTripsScreen = ({ onBack }: { onBack: () => void }) => {
  const pastTrips: Trip[] = [
    {
      id: "1",
      location: "Mandurah",
      dates: "8–10 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
    },
    {
      id: "2",
      location: "Busselton",
      dates: "4–8 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
    },
    {
      id: "3",
      location: "South Lake",
      dates: "31 Oct – 4 Nov 2024",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    },
    { id: "gap", location: "", dates: "", image: "", year: 2022 }, // Year separator
    {
      id: "4",
      location: "Highland",
      dates: "20–21 Oct 2022",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400",
    },
    {
      id: "5",
      location: "Breakish",
      dates: "19–20 Oct 2022",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
    },
  ];

  const renderTripCard = (trip: Trip) => {
    if (trip.year) {
      return (
        <View key={trip.year} style={styles.yearContainer}>
          <Text style={styles.yearText}>{trip.year}</Text>
        </View>
      );
    }

    return (
      <TouchableOpacity key={trip.id} style={styles.tripCard}>
        <Image source={{ uri: trip.image }} style={styles.tripImage} />
        <View style={styles.tripDetails}>
          <Text style={styles.tripLocation}>{trip.location}</Text>
          <Text style={styles.tripDates}>{trip.dates}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Past trips</Text>

        <View style={styles.timelineWrapper}>
          {/* Vertical Timeline Line */}
          <View style={styles.timelineLine} />

          <View style={styles.tripsList}>{pastTrips.map(renderTripCard)}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 32,
  },
  timelineWrapper: {
    position: "relative",
  },
  timelineLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: "#F3F4F6",
    marginLeft: -1,
  },
  tripsList: {
    gap: 16,
  },
  tripCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 2, // Keeps card above the line
  },
  tripImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
  },
  tripDetails: {
    marginLeft: 16,
    flex: 1,
  },
  tripLocation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  tripDates: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  yearContainer: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#FFF",
    zIndex: 2,
  },
  yearText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9CA3AF",
    backgroundColor: "#FFF",
    paddingHorizontal: 12,
  },
});

export default PastTripsScreen;
