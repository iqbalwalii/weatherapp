import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getLocation } from "./callback";
import { useState, useEffect } from "react";
import axios from "axios";
let x = {};
export default function App() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json
?q=srinagar&lang=english&key=607bcc927cd742378e0125052232405`
      )
      .then((res) => setWeather(JSON.stringify(res)));
  }, [weather]);
  const data = JSON.parse(weather).data;
  return (
    <View
    // style={data.current.temp_c > 20 ? styles.container_hot : container_cold}
    >
      <View style={styles.body}>
        <Text style={styles.heading}> Wali Wrather</Text>
        <Text>{data.location.name}</Text>
        <Text>{data.location.region}</Text>
        <Text>{data.location.tz_id}</Text>
        <Text>{data.current.temp_c}</Text>
        <Text>{data.current.feelslike_c}</Text>
        <Text>{data.current.wind_kph} KPH</Text>
      </View>
      <Text>waai!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container_cold: {
    backgroundColor: "yellow",
  },
  container_hot: {
    backgroundColor: "red",
  },
  body: {
    backgroundColor: "red",
  },
  heading: {
    backgroundColor: "#d00ddd",
    width: 390,
    fontSize: 32,
    textAlign: "center",
  },
});
