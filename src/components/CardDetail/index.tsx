import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardDetailPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Details: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function CardDetail({
  desc,
  title,
  icon,
  rating,
  thumbnail,
}: CardDetailPropsType): JSX.Element {
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
      <Text style={[Gs.h3, styles.descStyle]}>{desc}</Text>
      <View style={styles.cardContainer}>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image style={styles.thumbnailStyle} source={thumbnail} />
          <View>
            <Text style={[Gs.h2, styles.titleStyle]}>{title}</Text>
            <View style={[Gs.flexRow, Gs.itemsCenter]}>
              <Image source={icon} />
              <Text style={Gs.font600}>{rating}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.detailsContainer} onPress={handlePress}>
          <Text style={[Gs.textPrimary, Gs.font600]}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  cardContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    ...Gs.cornerXL,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: colors.greyContainer,
  },
  descStyle: {
    ...Gs.textBlack,
    marginBottom: 12,
  },
  titleStyle: {
    marginBottom: 2,
  },
  thumbnailStyle: {
    ...Gs.cornerMD,
    width: 70,
    height: 70,
    marginRight: 12,
  },
  detailsContainer: {
    marginRight: 14,
  },
});
