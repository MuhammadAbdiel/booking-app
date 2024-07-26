import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../assets/styles/Colors";
import Header from "../../components/Header";
import CardDetail from "../../components/CardDetail";
import { Gs } from "../../../assets/styles/GlobalStyle";
import InputText from "../../components/InputText";
import ButtonPrimary from "../../components/ButtonPrimary";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { inputTextPropsData } from "../../mock";

type RootStackParamList = {
  Checkout: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Booking(): JSX.Element {
  type DetailsScreenNavigationProp = NavigationProp<
    RootStackParamList,
    "Checkout"
  >;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate("Checkout");
  };

  return (
    <View style={styles.container}>
      <Header title="Booking" subTitle="Space available for today" />
      <ScrollView>
        <CardDetail
          desc="Your Space"
          title="IndoorWork"
          icon={require("../../../assets/icons/star_yellow.png")}
          rating="4.5/5"
          thumbnail={require("../../../assets/images/item_2_a.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={[Gs.h3, Gs.textBlack, styles.titleStyle]}>
            Booking Informations
          </Text>
          <Text style={Gs.textGrey}>Ensure data valid can't change</Text>
        </View>
        {inputTextPropsData.map((item, index) => (
          <View style={styles.infoContainer} key={index}>
            <InputText {...item} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <ButtonPrimary
          title="Proceed to payment"
          icon={require("../../../assets/icons/arrow_right_white.png")}
          onPress={handlePress}
          customStyle={styles.buttonStyle}
        />
        <Text style={[Gs.textGrey, styles.footerStyle]}>
          Read Terms & All Conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  titleContainer: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  infoContainer: {
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 16,
  },
  titleStyle: {
    marginBottom: 2,
  },
  buttonStyle: {
    paddingVertical: 14,
    paddingHorizontal: 86,
    marginBottom: 16,
  },
  footerStyle: {
    textAlign: "center",
  },
});
