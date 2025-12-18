// src/styles/mapStyles.ts
import { StyleSheet } from "react-native";

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1, // This is the crucial part
    backgroundColor: "#FFFFFF",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  priceMarker: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    elevation: 3,
  },
  priceMarkerText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  nomadMarker: {
    padding: 2,
    backgroundColor: "#14B8A6",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  nomadAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  onlineStatus: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22C55E",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});
