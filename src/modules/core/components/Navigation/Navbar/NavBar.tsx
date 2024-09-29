import { StyleSheet, Text, View } from "react-native";
import theme from "../../../../../../theme";
import Icons from "../../Icons";

function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <View style={styles.section}>
          <Text>
            <Icons.HomeIcon />
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Icons.TransactionsIcon />
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Icons.GridIcon />
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Icons.ChartIcon />
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <Icons.SettingsIcon />
          </Text>
        </View>
      </View>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  sections: {
    flexDirection: "row",
    borderRadius: 999,
    backgroundColor: theme.colors.gray[100],
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    textShadowRadius: 50,
    shadowOpacity: 0.25,
    elevation: 20,
  },
  section: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 10,
  },
});
