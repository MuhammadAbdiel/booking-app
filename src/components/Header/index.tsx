import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { useNavigation } from "@react-navigation/native";

export default function Header({
  title,
  subTitle,
  showRightButton,
}: HeaderPropsType): JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, Gs.itemsCenter, Gs.justifyBetween]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("../../../assets/icons/arrow_left_black.png")} />
      </TouchableOpacity>
      <View style={Gs.itemsCenter}>
        <Text style={[Gs.h1, Gs.textBlack]}>{title}</Text>
        <Text style={Gs.textGrey}>{subTitle}</Text>
      </View>
      <TouchableOpacity>
        {showRightButton && <Image source={showRightButton} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
});
