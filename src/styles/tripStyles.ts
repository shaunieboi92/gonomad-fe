// styles/tripStyles.ts
import { StyleSheet } from "react-native";

export default function createTripStyles(colors: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingTop: 8,
    },

    headerActions: {
      flexDirection: "row",
      gap: 16,
    },

    tripInfo: {
      paddingHorizontal: 16,
      marginTop: 12,
    },

    tripTitle: {
      fontSize: 26,
      fontWeight: "700",
      color: colors.textPrimary,
    },

    tripDates: {
      color: colors.textSecondary,
      marginTop: 4,
    },

    coverImage: {
      height: 160,
      borderRadius: 12,
      margin: 16,
    },

    timeline: {
      paddingHorizontal: 16,
      paddingBottom: 100,
    },

    dayLabel: {
      color: colors.textSecondary,
      fontWeight: "600",
      marginVertical: 12,
    },

    lineDot: {
      backgroundColor: colors.accent,
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
    },

    verticalLine: {
      backgroundColor: colors.accent,
        width: 2,
        flex: 1,
        marginTop: 0
    },

    itemTitle: {
      color: colors.textPrimary,
      fontWeight: "600",
    },

    subtitle: {
      color: colors.textSecondary,
    },

    note: {
      color: colors.textMuted,
      fontSize: 12,
    },

    fab: {
      position: "absolute",
      bottom: 24,
      right: 24,
      backgroundColor: colors.accent,
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: "center",
      justifyContent: "center",
      elevation: 6,
    },
      timelineItem: {
        flexDirection: "row",
        marginBottom: 16,
    },

    lineContainer: {
        alignItems: "center",
        width: 40,
    },

    itemContent: {
        flex: 1,
        paddingLeft: 4,
        paddingBottom: 12,
    },

    time: {
        color: colors.textSecondary,
        fontSize: 12,
    },
    headerTitle: {
        color: colors.textPrimary,
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 16,
    },
    sectionTitle: {
        color: colors.textSecondary,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 24,
        marginBottom: 8,
        paddingHorizontal: 16,
    },
     row: {
    flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    iconCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.accent,
        // backgroundColor: "#1E293B",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16,
    },
    rowText: {
        color: colors.textPrimary,
        fontSize: 16,
    },
  });
}


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

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 48) / 2;

// const tripStyles = StyleSheet.create({
//      container: {
//     flex: 1,
//     backgroundColor: "#0F172A", // dark navy
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     paddingTop: 8,
//   },

//   headerActions: {
//     flexDirection: "row",
//     gap: 16,
//   },

//   tripInfo: {
//     paddingHorizontal: 16,
//     marginTop: 12,
//   },

//   tripTitle: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#FFFFFF",
//   },

//   tripDates: {
//     color: "#94A3B8",
//     marginTop: 4,
//   },

//   coverImage: {
//     height: 160,
//     borderRadius: 12,
//     margin: 16,
//   },

//   timeline: {
//     paddingHorizontal: 16,
//     paddingBottom: 100,
//   },

//   dayLabel: {
//     color: "#CBD5E1",
//     fontWeight: "600",
//     marginVertical: 12,
//   },

//   timelineItem: {
//     flexDirection: "row",
//     marginBottom: 16,
//   },

//   lineContainer: {
//     alignItems: "center",
//     width: 40,
//   },

//   lineDot: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: "#14B8A6", // teal accent
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 2,
//   },

//   verticalLine: {
//     width: 2,
//     flex: 1,
//     backgroundColor: "#14B8A6", //"#1E293B",
//     marginTop: 0,
//   },

//   itemContent: {
//     flex: 1,
//     paddingLeft: 4,
//     paddingBottom: 12,
//   },

//   time: {
//     color: "#94A3B8",
//     fontSize: 12,
//   },

//   itemTitle: {
//     color: "#FFFFFF",
//     fontWeight: "600",
//     marginTop: 2,
//   },

//   subtitle: {
//     color: "#CBD5E1",
//     marginTop: 2,
//   },

//   note: {
//     color: "#64748B",
//     marginTop: 2,
//     fontSize: 12,
//   },

//   fab: {
//     position: "absolute",
//     bottom: 24,
//     right: 24,
//     backgroundColor: "#14B8A6",
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     alignItems: "center",
//     justifyContent: "center",
//     elevation: 6,
//   },

//    headerTitle: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     fontWeight: "600",
//     marginLeft: 16,
//   },
//   sectionTitle: {
//     color: "#94A3B8",
//     fontSize: 14,
//     fontWeight: "600",
//     marginTop: 24,
//     marginBottom: 8,
//     paddingHorizontal: 16,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//   },
//   iconCircle: {
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     backgroundColor: "#14B8A6",
//     // backgroundColor: "#1E293B",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 16,
//   },
//   rowText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//   },
// });

// export default tripStyles;
