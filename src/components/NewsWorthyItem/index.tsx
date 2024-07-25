import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NewsWorthyItemPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";

export default function NewsWorthyItem({
  title,
  address,
  price,
  image,
  onPress,
}: NewsWorthyItemPropsType): JSX.Element {
  return (
    <View style={styles.container}>
      <Image style={styles.imageBackground} source={image} />
      <View style={styles.contentContainer}>
        <Text style={styles.newsPriceContainer}>{price}</Text>
        <View>
          <View>
            <Text style={[Gs.h2, Gs.textWhite]}>{title}</Text>
            <Text style={Gs.textWhite}>{address}</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
            <Image
              source={require("../../../assets/icons/arrow_right_white.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 40,
  },
  imageBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
    position: "relative",
  },
  contentContainer: {
    ...Gs.justifyBetween,
    ...Gs.cornerXL,
    backgroundColor: colors.transparentBlack,
    width: 240,
    height: 320,
    padding: 20,
    position: "absolute",
  },
  newsPriceContainer: {
    ...Gs.font600,
    ...Gs.cornerMD,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    color: colors.primary,
    alignSelf: "flex-end",
  },
  arrowButton: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 40,
    zIndex: 2,
    bottom: 24,
    right: -40,
  },
});
