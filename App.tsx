import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Navuser from "./src/modules/core/components/Navigation/NavUser";
import Activity from "./src/modules/core/components/Cards/Activities";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Navuser />
      {/* <Image
        source={{
          uri: "https://preview.redd.it/new-wallpaper-v0-1og0p8ndtx4a1.png?width=1080&crop=smart&auto=webp&s=c6b294d14b32ee3bc6e6bc722f72e32c923f753f",
        }}
        style={{ width: 200, height: 300, resizeMode: "contain" }}
      /> */}
      <Text style={{ color: "#282032" }}>
        Open up App.js to start working on y
      </Text>
      <View style={{ padding: 20, gap: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Activities</Text>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
