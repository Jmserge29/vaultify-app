import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./src/modules/core/components/Main/Main";
import { useFonts } from "expo-font";
export default function App() {
  const [fontsLoaded] = useFonts({
    GroteskMedium: require("./assets/fonts/ClashGrotesk-Medium.otf"),
    GroteskRegular: require("./assets/fonts/ClashGrotesk-Regular.otf"),
    GroteskSemiBold: require("./assets/fonts/ClashGrotesk-Semibold.otf"),
  });
  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <Main />
      </View>
    </SafeAreaProvider>
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
