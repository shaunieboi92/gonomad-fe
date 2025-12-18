// // HomeScreen.tsx - Home landing page for GoNomad mobile app
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import Nomap from "./Nomap";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../components/navigation/AppNavigator";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 48) / 2;

// interface Listing {
//   id: number;
//   title: string;
//   location: string;
//   image: string;
//   price: number;
//   rating: number;
//   nights: number;
// }

// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Home"
// >;

// type Props = {
//   navigation: HomeScreenNavigationProp;
// };

// const HomeScreen = ({ navigation }: Props) => {
//   const [activeTab, setActiveTab] = useState("stays"); // stays, experiences, or nomap
//   const [favorites, setFavorites] = useState<Set<number>>(new Set());

//   const listings: Listing[] = [
//     {
//       id: 1,
//       title: "Modern Apartment in District IX",
//       location: "Budapest, Hungary",
//       image:
//         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
//       price: 1352,
//       rating: 4.97,
//       nights: 4,
//     },
//     {
//       id: 2,
//       title: "Cozy Studio in District V",
//       location: "Budapest, Hungary",
//       image:
//         "https://images.unsplash.com/photo-1502672260066-6bc35f0a1f80?w=800",
//       price: 1500,
//       rating: 4.85,
//       nights: 4,
//     },
//     {
//       id: 3,
//       title: "Spacious Loft with View",
//       location: "Budapest, Hungary",
//       image:
//         "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
//       price: 1680,
//       rating: 4.92,
//       nights: 4,
//     },
//     {
//       id: 4,
//       title: "Charming Flat Near Danube",
//       location: "Budapest, Hungary",
//       image:
//         "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
//       price: 1420,
//       rating: 4.88,
//       nights: 4,
//     },
//   ];

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) => {
//       const newFavorites = new Set(prev);
//       if (newFavorites.has(id)) {
//         newFavorites.delete(id);
//       } else {
//         newFavorites.add(id);
//       }
//       return newFavorites;
//     });
//   };

//   const renderListingCard = (listing: Listing) => (
//     <TouchableOpacity key={listing.id} style={styles.card}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: listing.image }} style={styles.cardImage} />
//         <TouchableOpacity
//           style={styles.favoriteButton}
//           onPress={() => toggleFavorite(listing.id)}
//         >
//           <Ionicons
//             name={favorites.has(listing.id) ? "heart" : "heart-outline"}
//             size={24}
//             color={favorites.has(listing.id) ? "#14B8A6" : "#374151"}
//           />
//         </TouchableOpacity>
//         <View style={styles.badge}>
//           <Text style={styles.badgeText}>Guest favourite</Text>
//         </View>
//       </View>

//       <View style={styles.cardContent}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardTitle} numberOfLines={1}>
//             {listing.title}
//           </Text>
//           <View style={styles.ratingContainer}>
//             <Ionicons name="star" size={14} color="#111827" />
//             <Text style={styles.rating}>{listing.rating}</Text>
//           </View>
//         </View>
//         <Text style={styles.location}>{listing.location}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.price}>${listing.price} SGD</Text>
//           <Text style={styles.nights}> for {listing.nights} nights</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

//       {/* Persistent Header */}
//       <View style={styles.header}>
//         <View style={styles.logoContainer}>
//           <View style={styles.logoIcon}>
//             <Ionicons name="location" size={24} color="#FFFFFF" />
//           </View>
//           <Text style={styles.logoText}>
//             <Text style={styles.logoGo}>Go</Text>
//             <Text style={styles.logoNomad}>Nomad</Text>
//           </Text>
//         </View>
//         <TouchableOpacity style={styles.userAvatar}>
//           <Text style={styles.userAvatarText}>U</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Persistent Search Bar */}
//       <View style={styles.searchContainer}>
//         <Ionicons
//           name="search"
//           size={20}
//           color="#9CA3AF"
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Start your search"
//           placeholderTextColor="#9CA3AF"
//         />
//       </View>

//       {/* Persistent Tabs (Lifting these out of ScrollView) */}
//       <View style={styles.tabs}>
//         {["stays", "experiences", "nomap"].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={styles.tab}
//             onPress={() => setActiveTab(tab)}
//           >
//             <View
//               style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
//             >
//               {tab === "nomap" && (
//                 <Ionicons
//                   name="map"
//                   size={16}
//                   color={activeTab === "nomap" ? "#111827" : "#6B7280"}
//                 />
//               )}
//               {tab === "nomap" ? (
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === tab && styles.tabTextActive,
//                   ]}
//                 >
//                   No
//                   <Text style={{ color: "#14B8A6" }}>map</Text>
//                 </Text>
//               ) : (
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === tab && styles.tabTextActive,
//                   ]}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </Text>
//               )}
//             </View>
//             {activeTab === tab && <View style={styles.tabIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Dynamic Content Area */}
//       <View style={{ flex: 1 }}>
//         {activeTab === "nomap" ? (
//           <Nomap />
//         ) : (
//           <ScrollView
//             style={styles.content}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.tripBanner}>
//               <View style={styles.tripInfo}>
//                 <Text style={styles.tripTitle}>
//                   View details of your Prague trip
//                 </Text>
//                 <View style={styles.tripDetails}>
//                   <View style={styles.tripDetail}>
//                     <Ionicons
//                       name="calendar-outline"
//                       size={16}
//                       color="#4B5563"
//                     />
//                     <Text style={styles.tripDetailText}>22–26 Dec</Text>
//                   </View>
//                   <View style={styles.tripDetail}>
//                     <Ionicons name="people-outline" size={16} color="#4B5563" />
//                     <Text style={styles.tripDetailText}>7 guests</Text>
//                   </View>
//                 </View>
//               </View>
//               <View style={styles.countdown}>
//                 <Text style={styles.countdownLabel}>IN</Text>
//                 <Text style={styles.countdownNumber}>5</Text>
//                 <Text style={styles.countdownLabel}>DAYS</Text>
//               </View>
//             </View>

//             <Text style={styles.sectionTitle}>Nomads also love Budapest</Text>
//             <View style={styles.grid}>{listings.map(renderListingCard)}</View>
//           </ScrollView>
//         )}
//       </View>
//     </>
//   );
// };

// // ... Styles remain the same as your provided code ...
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

// export default HomeScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../components/navigation/AppNavigator";
import Nomap from "./Nomap";
import styles from "../styles/styles";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

// Fix: Use RootStackParamList from stack navigator
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  nights: number;
  city: string;
  startDate: string;
  endDate: string;
}

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [activeTab, setActiveTab] = useState("stays");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const listings: Listing[] = [
    {
      id: 1,
      title: "Modern Apartment in District IX",
      location: "Budapest, Hungary",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      price: 1352,
      rating: 4.97,
      nights: 4,
      city: "Budapest",
      startDate: "22 Dec",
      endDate: "26 Dec",
    },
    {
      id: 2,
      title: "Cozy Studio in District V",
      location: "Budapest, Hungary",
      image:
        "https://images.unsplash.com/photo-1502672260066-6bc35f0a1f80?w=800",
      price: 1500,
      rating: 4.85,
      nights: 4,
      city: "Budapest",
      startDate: "22 Dec",
      endDate: "26 Dec",
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) newFavorites.delete(id);
      else newFavorites.add(id);
      return newFavorites;
    });
  };

  const renderListingCard = (listing: Listing) => (
    <TouchableOpacity
      key={listing.id}
      style={styles.card}
      onPress={() =>
        navigation.navigate("TripDetail", {
          city: listing.city,
          startDate: listing.startDate,
          endDate: listing.endDate,
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: listing.image }} style={styles.cardImage} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(listing.id)}
        >
          <Ionicons
            name={favorites.has(listing.id) ? "heart" : "heart-outline"}
            size={24}
            color={favorites.has(listing.id) ? "#14B8A6" : "#374151"}
          />
        </TouchableOpacity>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Guest favourite</Text>
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {listing.title}
          </Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#111827" />
            <Text style={styles.rating}>{listing.rating}</Text>
          </View>
        </View>
        <Text style={styles.location}>{listing.location}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${listing.price} SGD</Text>
          <Text style={styles.nights}> for {listing.nights} nights</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>{listings.map(renderListingCard)}</View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
