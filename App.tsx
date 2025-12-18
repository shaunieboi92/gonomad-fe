// // App.tsx - Main entry point for GoNomad mobile app
// import React, { useState } from "react";
// import { Dimensions } from "react-native";
// import HomeScreen from "./src/screens/HomeScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   StatusBar,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 48) / 2;

// const GoNomadApp = () => {
//   const [currentScreen, setCurrentScreen] = useState("Explore");

//   return (
//     <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
//       <View style={{ flex: 1 }}>
//         {/* Content */}
//         <View style={{ flex: 1 }}>
//           {/* {currentScreen === "Explore" && <HomeScreen />} */}
//           {currentScreen === "Explore"}

//           {currentScreen === "Profile" && <ProfileScreen />}
//           {/* Add other screens as needed */}
//         </View>

//         {/* Persistent Bottom Navigation */}
//         <View style={styles.bottomNav}>
//           <TouchableOpacity
//             style={styles.navItem}
//             onPress={() => setCurrentScreen("Explore")}
//           >
//             <Ionicons
//               name="search"
//               size={24}
//               color={currentScreen === "Explore" ? "#14B8A6" : "#9CA3AF"}
//             />
//             <Text
//               style={[
//                 styles.navText,
//                 currentScreen === "Explore" && styles.navTextActive,
//               ]}
//             >
//               Explore
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.navItem}>
//             <Ionicons name="heart-outline" size={24} color="#9CA3AF" />
//             <Text style={styles.navText}>Wishlists</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem}>
//             <Ionicons name="map-outline" size={24} color="#9CA3AF" />
//             <Text style={styles.navText}>Trips</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.navItem}
//             onPress={() => setCurrentScreen("Profile")}
//           >
//             <Ionicons
//               name="person-outline"
//               size={24}
//               color={currentScreen === "Profile" ? "#14B8A6" : "#9CA3AF"}
//             />
//             <Text
//               style={[
//                 styles.navText,
//                 currentScreen === "Profile" && styles.navTextActive,
//               ]}
//             >
//               Profile
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#FFFFFF" },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",
//   },
//   logoContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
//   logoIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#14B8A6",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoText: { fontSize: 20, fontWeight: "bold" },
//   logoGo: { color: "#1F2937" },
//   logoNomad: { color: "#14B8A6" },
//   userAvatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#14B8A6",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   userAvatarText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     margin: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     backgroundColor: "#F9FAFB",
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: "#D1D5DB",
//   },
//   searchIcon: { marginRight: 12 },
//   searchInput: { flex: 1, fontSize: 14, color: "#111827" },
//   content: { flex: 1 },
//   tabs: {
//     flexDirection: "row",
//     paddingHorizontal: 16,
//     gap: 32,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",
//   },
//   tab: { paddingVertical: 12, position: "relative" },
//   tabText: { fontSize: 16, fontWeight: "500", color: "#6B7280" },
//   tabTextActive: { color: "#111827" },
//   tabIndicator: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 2,
//     backgroundColor: "#111827",
//   },
//   tripBanner: {
//     margin: 16,
//     padding: 16,
//     backgroundColor: "#CCFBF1",
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: "#5EEAD4",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   tripInfo: { flex: 1 },
//   tripTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#111827",
//     marginBottom: 8,
//   },
//   tripDetails: { flexDirection: "row", gap: 16 },
//   tripDetail: { flexDirection: "row", alignItems: "center", gap: 4 },
//   tripDetailText: { fontSize: 14, color: "#4B5563" },
//   countdown: {
//     width: 80,
//     height: 80,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 3,
//   },
//   countdownLabel: { fontSize: 10, color: "#6B7280", fontWeight: "600" },
//   countdownNumber: { fontSize: 32, fontWeight: "bold", color: "#14B8A6" },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#111827",
//     paddingHorizontal: 16,
//     marginTop: 24,
//     marginBottom: 16,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     paddingHorizontal: 16,
//     gap: 16,
//     paddingBottom: 20,
//   },
//   card: { width: CARD_WIDTH, marginBottom: 16 },
//   imageContainer: {
//     position: "relative",
//     width: "100%",
//     height: CARD_WIDTH,
//     borderRadius: 12,
//     overflow: "hidden",
//     marginBottom: 8,
//   },
//   cardImage: { width: "100%", height: "100%" },
//   favoriteButton: {
//     position: "absolute",
//     top: 12,
//     right: 12,
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   badge: {
//     position: "absolute",
//     top: 12,
//     left: 12,
//     backgroundColor: "rgba(255, 255, 255, 0.9)",
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   badgeText: { fontSize: 10, fontWeight: "600", color: "#374151" },
//   cardContent: { gap: 4 },
//   cardHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   cardTitle: {
//     flex: 1,
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#111827",
//     marginRight: 8,
//   },
//   ratingContainer: { flexDirection: "row", alignItems: "center", gap: 2 },
//   rating: { fontSize: 12, fontWeight: "600", color: "#111827" },
//   location: { fontSize: 12, color: "#6B7280" },
//   priceContainer: {
//     flexDirection: "row",
//     alignItems: "baseline",
//     marginTop: 4,
//   },
//   price: { fontSize: 14, fontWeight: "600", color: "#111827" },
//   nights: { fontSize: 12, color: "#6B7280" },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#E5E7EB",
//     backgroundColor: "#FFFFFF",
//   },
//   navItem: { alignItems: "center", gap: 4 },
//   navText: { fontSize: 10, color: "#6B7280" },
//   navTextActive: { color: "#14B8A6", fontWeight: "600" },
// });

// export default GoNomadApp;
import React from "react";
import AppNavigator from "./src/components/navigation/AppNavigator";

export default function GoNomadApp() {
  return <AppNavigator />;
}
