import { ScrollView, Text, View } from "react-native";
import Navuser from "../Navigation/NavUser";
import Activity from "../Cards/Activities";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Balance from "../Cards/Balance";
import NavBar from "../Navigation/Navbar/NavBar";
import { TYPES_CONCEPTS_ACTIVITY } from "../../enums/activity";

function Main() {
  const activitiesData = [
    {
      id: 1, // Asignar un ID por defecto
      concept: "Netflix",
      description: "Suscripción mensual",
      amount: 15.99,
    },
    {
      id: 2,
      concept: "Spotify",
      description: "Música ilimitada",
      amount: 9.99,
    },
    {
      id: 3,
      concept: "Apple",
      description: "Compra de app",
      amount: 4.99,
    },
    {
      id: 4,
      concept: "Google",
      description: "Compra de almacenamiento",
      amount: 1.99,
    },
    {
      id: 5,
      concept: "Amazon",
      description: "Compra en línea",
      amount: 29.99,
    },
    {
      id: 6,
      concept: "Amazon",
      description: "Compra en línea",
      amount: 100.99,
    },
    {
      id: 7,
      concept: "Amazon",
      description: "Compra en línea",
      amount: 205.99,
    },
    {
      id: 8,
      concept: "Apple",
      description: "Compra de app",
      amount: 40.99,
    },
    {
      id: 9,
      concept: "Udemy",
      description: "Curso online",
      amount: 49.99,
    },
    {
      id: 10,
      concept: "Youtube",
      description: "Premium mensual",
      amount: 11.99,
    },
  ];
  const typeConcept: Record<string, TYPES_CONCEPTS_ACTIVITY> = {
    Netflix: TYPES_CONCEPTS_ACTIVITY.NETFLIX,
    Spotify: TYPES_CONCEPTS_ACTIVITY.SPOTIFY,
    Apple: TYPES_CONCEPTS_ACTIVITY.APPLE,
    Google: TYPES_CONCEPTS_ACTIVITY.GOOGLE,
    Amazon: TYPES_CONCEPTS_ACTIVITY.AMAZON,
    Udemy: TYPES_CONCEPTS_ACTIVITY.UDEMY,
    Youtube: TYPES_CONCEPTS_ACTIVITY.YOUTUBE,
  };
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingHorizontal: 4 }}>
      <Navuser />
      <Balance />
      <Text
        style={{
          fontSize: 26,
          fontFamily: "GroteskSemiBold",
          paddingBottom: 10,
          paddingHorizontal: 20,
        }}
      >
        Activities
      </Text>
      <ScrollView>
        <View style={{ padding: 20, gap: 12 }}>
          {activitiesData.map((activity, index) => (
            <Activity
              key={activity.id}
              concept={typeConcept[activity.concept]}
              description={activity.description}
              amount={activity.amount}
            />
          ))}
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
}

export default Main;
