import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";

type RootStackParamList = {
  Details: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Success(): JSX.Element {
  type DetailsScreenNavigationProp = NavigationProp<
    RootStackParamList,
    "Details"
  >;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/item_1_a.png")}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <View style={styles.rating}>
            <Image source={require("../../../assets/icons/star_white.png")} />
            <Text style={[Gs.h5, Gs.textWhite]}>4.5/5</Text>
          </View>
          <View style={styles.booked}>
            <Text style={[Gs.h5, Gs.textWhite]}>Booked</Text>
          </View>
          <View style={styles.label}>
            <Text style={[Gs.h2, Gs.textWhite]}>Hajime</Text>
            <Text style={Gs.textWhite}>Pantai Utara No. 90</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[Gs.h1, Gs.textBlack]}>Success Booking</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>
          Your space is ready to use for your growing business and life
        </Text>
      </View>
      <ButtonPrimary
        title="View Details"
        icon={require("../../../assets/icons/arrow_right_white.png")}
        onPress={handlePress}
        customStyle={styles.buttonStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: "relative",
  },
  overlay: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    backgroundColor: colors.transparentBlack,
    position: "absolute",
  },
  rating: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 14,
    width: 60,
    height: 60,
    position: "absolute",
    right: -30,
    top: 30,
  },
  booked: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 8,
    width: 100,
    height: 40,
    position: "absolute",
    left: -30,
    bottom: 120,
  },
  label: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  textContainer: {
    ...Gs.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {
    marginLeft: 4,
  },
  buttonStyle: {
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
});
