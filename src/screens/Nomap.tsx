import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
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
  SafeAreaView,
} from "react-native";
import { mapStyles } from "../styles/mapStyles";

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Modern Apartment in District IX",
    location: "Budapest, Hungary",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    price: 135,
    rating: 4.97,
    nights: 4,
    coordinates: { latitude: 47.4851, longitude: 19.0667 },
  },
  {
    id: 2,
    title: "Cozy Studio in District V",
    location: "Budapest, Hungary",
    image: "https://images.unsplash.com/photo-1502672260066-6bc35f0a1f80?w=800",
    price: 150,
    rating: 4.85,
    nights: 4,
    coordinates: { latitude: 47.4931, longitude: 19.0522 },
  },
  {
    id: 3,
    title: "Spacious Loft with View",
    location: "Budapest, Hungary",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800",
    price: 168,
    rating: 4.92,
    nights: 4,
    coordinates: { latitude: 47.5005, longitude: 19.0465 },
  },
  {
    id: 4,
    title: "Charming Flat Near Danube",
    location: "Budapest, Hungary",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
    price: 142,
    rating: 4.88,
    nights: 4,
    coordinates: { latitude: 47.4892, longitude: 19.0505 },
  },
];

export const MOCK_NOMADS: Nomad[] = [
  {
    id: 101,
    name: "Alex",
    status: "Working at Espresso Embassy",
    avatar: "https://i.pravatar.cc/150?u=alex",
    coordinates: { latitude: 47.5011, longitude: 19.0498 },
  },
  {
    id: 102,
    name: "Sarah",
    status: "Exploring Parliament",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    coordinates: { latitude: 47.5071, longitude: 19.0456 },
  },
  {
    id: 103,
    name: "Miko",
    status: "Available for coffee",
    avatar: "https://i.pravatar.cc/150?u=miko",
    coordinates: { latitude: 47.4962, longitude: 19.0601 },
  },
];

interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  nights: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface Nomad {
  id: number;
  name: string;
  status: string; // e.g., "Working from cafe"
  avatar: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const Nomap = () => {
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
      }
    })();
  }, []);

  return (
    <View style={mapStyles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyles.map}
        initialRegion={{
          latitude: 47.4979, // Budapest
          longitude: 19.0402,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Render Listings as Price Badges (Airbnb Style) */}
        {MOCK_LISTINGS.map((listing) => (
          <Marker
            key={`listing-${listing.id}`}
            coordinate={{
              latitude: listing.coordinates.latitude,
              longitude: listing.coordinates.longitude,
            }}
          >
            <View style={mapStyles.priceMarker}>
              <Text style={mapStyles.priceMarkerText}>${listing.price}</Text>
            </View>
          </Marker>
        ))}

        {/* Render Nomads as Avatars */}
        {MOCK_NOMADS.map((nomad) => (
          <Marker key={`nomad-${nomad.id}`} coordinate={nomad.coordinates}>
            <View style={mapStyles.nomadMarker}>
              <Image
                source={{ uri: nomad.avatar }}
                style={mapStyles.nomadAvatar}
              />
              <View style={mapStyles.onlineStatus} />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Nomap;
