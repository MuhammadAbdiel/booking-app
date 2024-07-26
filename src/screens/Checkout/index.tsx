import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../assets/styles/Colors";
import CardDetail from "../../components/CardDetail";
import Header from "../../components/Header";
import ButtonPrimary from "../../components/ButtonPrimary";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { checkoutData, paymentMethod } from "../../mock";

type RootStackParamList = {
  Success: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Checkout(): JSX.Element {
  type DetailsScreenNavigationProp = NavigationProp<
    RootStackParamList,
    "Success"
  >;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate("Success");
  };

  const renderCheckoutData = () => {
    return (
      <View style={[styles.sectionContainer, styles.checkoutDataContainer]}>
        {checkoutData.map((data, index) => {
          const isLast = index === checkoutData.length - 1;
          return (
            <View
              key={index}
              style={[styles.checkoutItem, !isLast && styles.borderStyle]}
            >
              <Text style={Gs.textBlack}>{data.label}</Text>
              <Text
                style={[
                  Gs.textBlack,
                  data.isBold && Gs.font700,
                  isLast && Gs.textPrimary,
                ]}
              >
                {data.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <View style={[styles.sectionContainer, styles.paymentContainer]}>
        <Text style={[Gs.h3, Gs.textBlack, styles.paymentTitleStyle]}>
          Payment
        </Text>
        <View style={[Gs.flexRow, Gs.itemsCenter, Gs.justifyBetween]}>
          {paymentMethod.map((data, index) => {
            const isFirst = index === 0;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.paymentButton,
                  isFirst && styles.firstPaymentButton,
                ]}
              >
                <Image source={data.logo} />
                {data.title && <Text style={Gs.textBlack}>{data.title}</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Checkout" subTitle="Ready to start working?" />
      <ScrollView>
        <CardDetail
          desc="Booking Confirmation"
          title="IndoorWork"
          icon={require("../../../assets/icons/star_yellow.png")}
          rating="4.5/5"
          thumbnail={require("../../../assets/images/item_2_a.png")}
        />
        {renderCheckoutData()}
        {renderPaymentMethod()}
      </ScrollView>
      <View style={styles.footerContainer}>
        <ButtonPrimary
          title="Pay Now"
          icon={require("../../../assets/icons/pay.png")}
          onPress={handlePress}
          customStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  sectionContainer: {
    paddingHorizontal: 24,
  },
  checkoutDataContainer: {
    paddingBottom: 24,
  },
  checkoutItem: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingVertical: 14,
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderColor: colors.greyContainer,
  },
  paymentContainer: {
    paddingBottom: 30,
  },
  paymentTitleStyle: {
    marginBottom: 12,
  },
  firstPaymentButton: {
    marginRight: 28,
  },
  paymentButton: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    ...Gs.cornerLG,
    flex: 1,
    paddingVertical: 23,
    borderWidth: 2,
    borderColor: colors.greyContainer,
  },
  footerContainer: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 16,
  },
  buttonStyle: {
    paddingVertical: 14,
    paddingHorizontal: 86,
    marginBottom: 16,
  },
});
