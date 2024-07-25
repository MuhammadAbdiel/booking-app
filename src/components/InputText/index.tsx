import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { InputTextPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";

export default function InputText({
  icon,
  label,
  placeholder,
}: InputTextPropsType): JSX.Element {
  return (
    <>
      {label && <Text>{label}</Text>}
      <View
        style={[
          Gs.flexRow,
          Gs.itemsCenter,
          styles.paddingStyle,
          styles.borderStyle,
          Gs.cornerXL,
        ]}
      >
        {icon && <Image style={styles.marginStyle} source={icon} />}
        <TextInput placeholder={placeholder} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  marginStyle: {
    marginRight: 12,
  },
  paddingStyle: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  borderStyle: {
    borderWidth: 2,
    borderColor: colors.greyContainer,
  },
});
