// src/screens/ProfileScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import PastTripsScreen from "./PastTripsScreen";
import { useTheme } from "../contexts/ThemeContext";

const ProfileScreen = () => {
  const [showPastTrips, setShowPastTrips] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  if (showPastTrips) {
    return <PastTripsScreen onBack={() => setShowPastTrips(false)} />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Main Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?u=shaun" }} // Replace with actual user image
                style={styles.avatar}
              />
              <View style={styles.verifiedBadge}>
                <Ionicons name="shield-checkmark" size={14} color="#FFF" />
              </View>
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>16</Text>
                <Text style={styles.statLabel}>Trips</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>14</Text>
                <Text style={styles.statLabel}>Reviews</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>10</Text>
                <Text style={styles.statLabel}>Years on Nomad</Text>
              </View>
            </View>
          </View>

          <Text style={styles.userName}>Shaun Raphael</Text>
          <Text style={styles.userLocation}>Singapore</Text>
        </View>

        {/* Grid Options */}
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={styles.gridCard}
            onPress={() => setShowPastTrips(true)}
          >
            <View style={styles.imageStack}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200",
                }}
                style={[
                  styles.stackImage,
                  { transform: [{ rotate: "-10deg" }, { translateX: -10 }] },
                ]}
              />
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200",
                }}
                style={styles.stackImage}
              />
            </View>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
            <Text style={styles.cardLabel}>Past trips</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="people" size={40} color="#14B8A6" />
            </View>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
            <Text style={styles.cardLabel}>Connections</Text>
          </TouchableOpacity>
        </View>

        {/* Theme Toggle */}
        <View style={styles.settingsCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Ionicons name="moon" size={24} color="#14B8A6" />
              <Text style={styles.settingLabel}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: "#D1D5DB", true: "#14B8A6" }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* Become a Host Section */}
        <TouchableOpacity style={styles.hostCard}>
          <View style={styles.hostContent}>
            <Text style={styles.hostTitle}>Become a nomad</Text>
            <Text style={styles.hostSubtitle}>
              Start travelling around the world today and meet people sharing
              the same passion!
            </Text>
          </View>
          <Ionicons name="home-outline" size={32} color="#14B8A6" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerTitle: { fontSize: 32, fontWeight: "bold", color: "#111827" },
  notificationBtn: { padding: 8, backgroundColor: "#F3F4F6", borderRadius: 20 },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  profileCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 24,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarContainer: { position: "relative" },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  verifiedBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#E11D48",
    padding: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  statsContainer: { flex: 1, marginLeft: 20, gap: 10 },
  statItem: { paddingVertical: 2 },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  statLabel: { fontSize: 12, color: "#6B7280" },
  statDivider: { height: 1, backgroundColor: "#E5E7EB", width: "100%" },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 16,
  },
  userLocation: { fontSize: 14, color: "#6B7280" },
  gridContainer: { flexDirection: "row", gap: 16, marginBottom: 16 },
  gridCard: {
    flex: 1,
    height: 180,
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 16,
    justifyContent: "flex-end",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardLabel: { fontSize: 18, fontWeight: "600", color: "#111827" },
  imageStack: { height: 80, justifyContent: "center", alignItems: "center" },
  stackImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    position: "absolute",
    borderWidth: 2,
    borderColor: "#FFF",
  },
  iconContainer: { height: 80, justifyContent: "center", alignItems: "center" },
  newBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  newBadgeText: { fontSize: 10, fontWeight: "bold", color: "#1E40AF" },
  settingsCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 24,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  hostCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 24,
    borderRadius: 24,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  hostContent: { flex: 1, marginRight: 16 },
  hostTitle: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  hostSubtitle: { fontSize: 14, color: "#6B7280", marginTop: 4 },
});

export default ProfileScreen;
