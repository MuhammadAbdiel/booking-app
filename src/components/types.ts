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

export type HeaderPropsType = {
  title: string;
  subTitle: string;
  showRightButton?: ImageSourcePropType;
};

export type ButtonPrimaryPropsType = {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
  customStyle?: any;
};

export type CardDetailPropsType = {
  desc?: string;
  title: string;
  icon: ImageSourcePropType;
  rating: string;
  thumbnail: ImageSourcePropType;
};
