import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../../../../../../theme";
import Icons from "../../Icons";

function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.barLeft}></View>
      <View style={styles.target}>
        <Text style={{ fontFamily: "GroteskRegular" }}>Your Balance</Text>
        <Text style={{ fontSize: 26, fontFamily: "GroteskSemiBold" }}>
          $ 165,000.00
        </Text>
        <Text style={{ fontFamily: "GroteskMedium" }}>Current Balance</Text>
      </View>
      <View style={{ gap: 10, alignItems: "center", justifyContent: "center" }}>
        <Pressable style={styles.buttonSend}>
          <Text
            style={{
              fontFamily: "GroteskMedium",
              fontSize: 30,
              color: theme.colors.white,
            }}
          >
            <Icons.ArrowUpCheckIcon />
          </Text>
        </Pressable>

        <Pressable style={styles.buttonDeposit}>
          <Text
            style={{
              fontFamily: "GroteskMedium",
              fontSize: 30,
              color: theme.colors.white,
            }}
          >
            <Icons.ArrowDowmCheckIcon />
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Balance;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 40,
  },
  target: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    padding: 20,
    gap: 6,
    paddingHorizontal: 40,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    textShadowRadius: 50,
    shadowOpacity: 0.25,
    elevation: 70,
  },
  buttonDeposit: {
    backgroundColor: theme.colors.malachite[500],
    padding: 15,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: theme.colors.malachite[500],
    shadowOffset: { width: 0, height: 8 },
    textShadowRadius: 50,
    shadowOpacity: 0.25,
    elevation: 70,
  },
  buttonSend: {
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: theme.colors.primary[500],
    shadowOffset: { width: 0, height: 8 },
    textShadowRadius: 50,
    shadowOpacity: 0.25,
    elevation: 70,
  },
  barLeft: {
    position: "absolute",
    backgroundColor: theme.colors.ocean[600],
    width: 12,
    height: 113,
    borderRadius: 9999,
    left: 18,
    shadowColor: theme.colors.primary[500],
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 99,
  },
});
