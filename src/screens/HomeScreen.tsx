import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Nomap from "./Nomap";
// import styles from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import createHomeStyles from "../styles/styles";
import { useTheme } from "../contexts/ThemeContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  nights: number;
}

const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
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
    },
    {
      id: 3,
      title: "Spacious Loft with View",
      location: "Budapest, Hungary",
      image:
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
      price: 1680,
      rating: 4.92,
      nights: 4,
    },
    {
      id: 4,
      title: "Charming Flat Near Danube",
      location: "Budapest, Hungary",
      image:
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
      price: 1420,
      rating: 4.88,
      nights: 4,
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
      style={[styles.card]}
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
          <Text style={[styles.cardTitle]} numberOfLines={1}>
            {listing.title}
          </Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={colors.accent} />
            <Text style={[styles.rating, { color: colors.textPrimary }]}>{listing.rating}</Text>
          </View>
        </View>
        <Text style={[styles.location]}>{listing.location}</Text>
        <View style={styles.priceContainer}>
          <Text style={[styles.price]}>${listing.price} SGD</Text>
          <Text style={[styles.nights]}>{` for ${listing.nights} nights`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container]} edges={["top"]}>
    
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Ionicons name="location" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.logoText}>
            <Text style={styles.logoGo}>Go</Text>
            <Text style={styles.logoNomad}>Nomad</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.userAvatar}>
          <Text style={styles.userAvatarText}>U</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer]}>
        <Ionicons
          name="search"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchInput]}
          placeholder="Start your search"
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["stays", "experiences", "nomap"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => setActiveTab(tab)}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              {tab === "nomap" && (
                <Ionicons
                  name="map"
                  size={16}
                  color={activeTab === "nomap" ? colors.textPrimary : colors.textSecondary}
                />
              )}
              {tab === "nomap" ? (
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && { color: colors.textPrimary },
                    { color: colors.textSecondary }
                  ]}
                >
                  No<Text style={{ color: "#14B8A6" }}>map</Text>
                </Text>
              ) : (
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && { color: colors.textPrimary },
                    { color: colors.textSecondary }
                  ]}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
              )}
            </View>
            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      {activeTab === "nomap" ? (
        <Nomap />
      ) : (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.tripBanner]}>
            <View style={styles.tripInfo}>
              <Text style={[styles.tripTitle]}>
                View details of your Prague trip
              </Text>
              <View style={styles.tripDetails}>
                <View style={styles.tripDetail}>
                  <Ionicons
                    name="calendar-outline"
                    size={16}
                  />
                  <Text style={[styles.tripDetailText]}>22–26 Dec</Text>
                </View>
                <View style={styles.tripDetail}>
                  <Ionicons name="people-outline" size={16} color={colors.textSecondary} />
                  <Text style={[styles.tripDetailText]}>7 guests</Text>
                </View>
              </View>
            </View>
            <View style={styles.countdown}>
              <Text style={styles.countdownLabel}>IN</Text>
              <Text style={styles.countdownNumber}>5</Text>
              <Text style={styles.countdownLabel}>DAYS</Text>
            </View>
          </View>

          <Text style={[styles.sectionTitle]}>Nomads also love Budapest</Text>
          <View style={styles.grid}>{listings.map(renderListingCard)}</View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
