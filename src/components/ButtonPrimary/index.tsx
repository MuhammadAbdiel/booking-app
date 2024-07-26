import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonPrimaryPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";

export default function ButtonPrimary({
  title,
  icon,
  onPress,
  customStyle,
}: ButtonPrimaryPropsType): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, customStyle]}>
      <View style={[Gs.flexRow, Gs.justifyCenter, Gs.itemsCenter]}>
        <Text style={[Gs.textWhite, Gs.font700, styles.titleMargin]}>
          {title}
        </Text>
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.cornerMD,
    backgroundColor: colors.primary,
  },
  titleMargin: {
    marginRight: 4,
  },
});
