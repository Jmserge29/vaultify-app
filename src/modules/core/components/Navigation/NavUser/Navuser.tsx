import { Image, StyleSheet, Text, View } from "react-native";

export default function Navuser() {
  return (
    <View style={styles.container}>
      <View style={styles.profiler}>
        <Image
          source={{
            uri: "https://images2.alphacoders.com/135/thumb-1920-1357981.png",
          }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "cover",
            borderRadius: 999,
          }}
        />
        <View>
          <Text style={{ color: "#282032", fontSize: 14 }}>Sakura Serge</Text>
          <Text style={{ color: "#282032", fontSize: 18, fontWeight: 700 }}>
            Welcome back
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: "#282032" }}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  profiler: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
