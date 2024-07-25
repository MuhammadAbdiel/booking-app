import { ImageSourcePropType } from "react-native";

export type InputTextPropsType = {
  icon?: ImageSourcePropType;
  label?: string;
  placeholder: string;
};

export type NewsWorthyItemPropsType = {
  title: string;
  address: string;
  price: string;
  image: ImageSourcePropType;
  onPress: () => void;
};
