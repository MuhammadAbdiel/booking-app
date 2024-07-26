import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const Gs = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  font400: {
    fontWeight: "400",
    // fontFamily: "Poppins_400Regular",
  },
  font600: {
    fontWeight: "600",
    // fontFamily: "Poppins_600SemiBold",
  },
  font700: {
    fontWeight: "700",
    // fontFamily: "Poppins_700Bold",
  },
  textBlack: {
    color: colors.black,
  },
  textGrey: {
    color: colors.grey,
  },
  textWhite: {
    color: colors.white,
  },
  textPrimary: {
    color: colors.primary,
  },
  textCenter: {
    textAlign: "center",
  },
  itemsCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 22,
    fontWeight: "700",
    // fontFamily: "Poppins_700Bold",
  },
  h2: {
    fontSize: 18,
    fontWeight: "700",
    // fontFamily: "Poppins_700Bold",
  },
  h3: {
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Poppins_700Bold",
  },
  h4: {
    fontSize: 14,
    fontWeight: "600",
    // fontFamily: "Poppins_600SemiBold",
  },
  h5: {
    fontSize: 12,
    fontWeight: "600",
    // fontFamily: "Poppins_600SemiBold",
  },
  cornerXS: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cornerSM: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cornerMD: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  cornerLG: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cornerXL: {
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});
