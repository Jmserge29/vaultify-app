import { StyleSheet, Text, View } from "react-native";

function Activity() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: 700 }}>Netflix</Text>
          <Text>Subscription</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>-$165,000.00</Text>
      </View>
    </View>
  );
}

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: "#d8ffec",
    gap: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
