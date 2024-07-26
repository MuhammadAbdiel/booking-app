import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { InputTextPropsType } from "../types";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";
import { useState } from "react";

export default function InputText({
  icon,
  label,
  placeholder,
}: InputTextPropsType): JSX.Element {
  const [borderColor, setBorderColor] = useState(colors.greyContainer);

  return (
    <>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <View
        style={[
          Gs.flexRow,
          Gs.itemsCenter,
          styles.paddingStyle,
          styles.borderStyle,
          Gs.cornerXL,
          {
            borderColor: borderColor,
          },
        ]}
      >
        {icon && <Image style={styles.marginStyle} source={icon} />}
        <TextInput
          onFocus={() => setBorderColor(colors.primary)}
          onBlur={() => setBorderColor(colors.greyContainer)}
          placeholder={placeholder}
        />
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
  },
  labelStyle: {
    ...Gs.textBlack,
    marginBottom: 4,
  },
});
