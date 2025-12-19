import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../contexts/ThemeContext";
import createTripStyles from "../../../styles/tripStyles";
import { AIRLINES } from "../../../../data/mock/airlines";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddFlightScreen({ route, navigation }: { route: any; navigation: any }) {
  const { colors } = useTheme();
  const styles = createTripStyles(colors);
  const { onSaveFlight } = route.params || {}; // callback passed from TripDetailScreen

  // const navigation = useNavigation<any>();

  const [airlineOpen, setAirlineOpen] = useState(false);
  const [airline, setAirline] = useState<string | null>(null);
  const [flightNumber, setFlightNumber] = useState("");
  const [from, setFrom] = useState("");
  const [departureTime, setDepartureTime] = useState(new Date());
  const [showDepartureDatePicker, setShowDepartureDatePicker] = useState(false);
  const [showDepartureTimePicker, setShowDepartureTimePicker] = useState(false);
  const [arrivalTime, setArrivalTime] = useState(new Date());
  const [showArrivalDatePicker, setShowArrivalDatePicker] = useState(false);
  const [showArrivalTimePicker, setShowArrivalTimePicker] = useState(false);
  const [to, setTo] = useState("");

   const handleSave = () => {
    if (!departureTime || !arrivalTime || !from || !to || !flightNumber || !airline) {
      Alert.alert("Please fill all fields");
      return;
    }

    const formatTime = (date: Date) => {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const formatDateTime = (date: Date) => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}, ${formatTime(date)}`;
    };

    const newFlight = {
      date: departureTime,
      time: formatTime(departureTime),
      icon: "airplane",
      title: `${from} → ${to}`,
      subtitle: `${flightNumber} · ${airline}`,
      arrivalTime: formatDateTime(arrivalTime),
      note: undefined,
    };

    if (onSaveFlight) {
      onSaveFlight(newFlight);
    }
    navigation.navigate("TripDetail");
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Flight</Text>
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!airlineOpen}
      >
      <View style={{ gap: 16 }}>
        {/* Airline */}
        <Text style={{ color: colors.textSecondary }}>Airline</Text>
      <DropDownPicker
        open={airlineOpen}
        value={airline}
        setOpen={setAirlineOpen}
        setValue={setAirline}
        items={AIRLINES.map(a => ({
          label: a.name,
          value: a.code,
        }))}
        searchable
        placeholder="Select airline"
        searchPlaceholder="Airline"
        style={{
          backgroundColor: colors.card,
          borderWidth: 0,       // removes border
          borderRadius: 8,      // match TextInput
          paddingVertical: 12,
          paddingHorizontal: 12,
        }}
        textStyle={{
          color: colors.textSecondary,
        }}
        dropDownContainerStyle={{
          backgroundColor: colors.card,
          borderWidth: 0,       // removes border of dropdown
          borderRadius: 8,
          shadowOpacity: 0,     // remove shadow on iOS
          elevation: 0,         // remove shadow on Android
        }}
      placeholderStyle={{ color: colors.textMuted }}
        searchContainerStyle={{
        backgroundColor: colors.card,
        borderBottomWidth: 1,           // light bottom border
        borderBottomColor: colors.textMuted,
      }}
        searchTextInputStyle={{
        color: colors.textPrimary,
        paddingVertical: 8,
        paddingHorizontal: 12,
      }}
      />

        {/* Flight Number */}
        <Text style={{ color: colors.textSecondary }}>Flight Number</Text>
        <TextInput
          value={flightNumber}
          onChangeText={setFlightNumber}
          placeholder="e.g. SQ305"
          placeholderTextColor={colors.textMuted}
          style={{
            backgroundColor: colors.card,
            color: colors.textPrimary,
            padding: 12,
            borderRadius: 8,
          }}
        />

        {/* From */}
        <Text style={{ color: colors.textSecondary }}>From</Text>
        <TextInput
          value={from}
          onChangeText={setFrom}
          placeholder="Departure city / airport"
          placeholderTextColor={colors.textMuted}
          style={{
            backgroundColor: colors.card,
            color: colors.textPrimary,
            padding: 12,
            borderRadius: 8,
          }}
        />

        {/* Departure Date */}
        <Text style={{ color: colors.textSecondary }}>Departure Date</Text>
        <TouchableOpacity
          onPress={() => setShowDepartureDatePicker(true)}
          style={{
            backgroundColor: colors.card,
            padding: 12,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.textPrimary }}>
            {departureTime.toLocaleDateString()}
          </Text>
          <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        {showDepartureDatePicker && (
          <DateTimePicker
            value={departureTime}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowDepartureDatePicker(Platform.OS === 'ios');
              if (selectedDate) {
                setDepartureTime(selectedDate);
              }
            }}
          />
        )}

        {/* Departure Time */}
        <Text style={{ color: colors.textSecondary }}>Departure Time</Text>
        <TouchableOpacity
          onPress={() => setShowDepartureTimePicker(true)}
          style={{
            backgroundColor: colors.card,
            padding: 12,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.textPrimary }}>
            {departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
          <Ionicons name="time-outline" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        {showDepartureTimePicker && (
          <DateTimePicker
            value={departureTime}
            mode="time"
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedTime) => {
              setShowDepartureTimePicker(Platform.OS === 'ios');
              if (selectedTime) {
                setDepartureTime(selectedTime);
              }
            }}
          />
        )}

        {/* To */}
        <Text style={{ color: colors.textSecondary }}>To</Text>
        <TextInput
          value={to}
          onChangeText={setTo}
          placeholder="Arrival city / airport"
          placeholderTextColor={colors.textMuted}
          style={{
            backgroundColor: colors.card,
            color: colors.textPrimary,
            padding: 12,
            borderRadius: 8,
          }}
        />

        {/* Arrival Date */}
        <Text style={{ color: colors.textSecondary }}>Arrival Date</Text>
        <TouchableOpacity
          onPress={() => setShowArrivalDatePicker(true)}
          style={{
            backgroundColor: colors.card,
            padding: 12,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.textPrimary }}>
            {arrivalTime.toLocaleDateString()}
          </Text>
          <Ionicons name="calendar-outline" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        {showArrivalDatePicker && (
          <DateTimePicker
            value={arrivalTime}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              setShowArrivalDatePicker(Platform.OS === 'ios');
              if (selectedDate) {
                setArrivalTime(selectedDate);
              }
            }}
          />
        )}

        {/* Arrival Time */}
        <Text style={{ color: colors.textSecondary }}>Arrival Time</Text>
        <TouchableOpacity
          onPress={() => setShowArrivalTimePicker(true)}
          style={{
            backgroundColor: colors.card,
            padding: 12,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.textPrimary }}>
            {arrivalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
          <Ionicons name="time-outline" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        {showArrivalTimePicker && (
          <DateTimePicker
            value={arrivalTime}
            mode="time"
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedTime) => {
              setShowArrivalTimePicker(Platform.OS === 'ios');
              if (selectedTime) {
                setArrivalTime(selectedTime);
              }
            }}
          />
        )}

        {/* Save */}
        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: colors.accent,
            padding: 14,
            borderRadius: 10,
            marginTop: 24,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>
            Save Flight
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


