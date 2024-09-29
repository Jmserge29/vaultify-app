import { StyleSheet, Text, View } from "react-native";
import theme from "../../../../../../theme";
import Icons from "../../Icons";
import { TYPES_CONCEPTS_ACTIVITY } from "../../../enums/activity";
import { formatAmount } from "../../../helpers/amount";

interface ActivityProps {
  concept: TYPES_CONCEPTS_ACTIVITY;
  description: string;
  amount: number;
}
function Activity({ concept, description, amount }: ActivityProps) {
  const iconConecpt: Record<TYPES_CONCEPTS_ACTIVITY, JSX.Element> = {
    [TYPES_CONCEPTS_ACTIVITY.NETFLIX]: (
      <Icons.NetflixSVG width={28} height={28} />
    ),
    [TYPES_CONCEPTS_ACTIVITY.SPOTIFY]: (
      <Icons.SpotifySVG width={28} height={28} />
    ),
    [TYPES_CONCEPTS_ACTIVITY.APPLE]: <Icons.AppleSVG width={28} height={28} />,
    [TYPES_CONCEPTS_ACTIVITY.GOOGLE]: (
      <Icons.GoogleSVG width={28} height={28} />
    ),
    [TYPES_CONCEPTS_ACTIVITY.AMAZON]: (
      <Icons.AmazonSVG width={28} height={28} />
    ),
    [TYPES_CONCEPTS_ACTIVITY.UDEMY]: <Icons.UdemySVG width={28} height={28} />,
    [TYPES_CONCEPTS_ACTIVITY.YOUTUBE]: (
      <Icons.YoutubeSVG width={28} height={28} />
    ),
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <View style={styles.icon}>{iconConecpt[concept]}</View>
        <View style={{ gap: 3 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "GroteskSemiBold",
            }}
          >
            {concept}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "GroteskRegular",
            }}
          >
            {description}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontFamily: "GroteskMedium", fontSize: 18 }}>
          -${formatAmount(amount)}
        </Text>
      </View>
    </View>
  );
}

export default Activity;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: theme.colors.gray[50],
    gap: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
