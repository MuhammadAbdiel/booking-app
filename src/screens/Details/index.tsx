import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../../assets/styles/Colors";
import Header from "../../components/Header";
import { Gs } from "../../../assets/styles/GlobalStyle";
import ButtonPrimary from "../../components/ButtonPrimary";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Booking: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Details(): JSX.Element {
  type DetailsScreenNavigationProp = NavigationProp<
    RootStackParamList,
    "Booking"
  >;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const sliderData = [
    {
      image: require("../../../assets/images/item_2_b.png"),
    },
    {
      image: require("../../../assets/images/item_2_c.png"),
    },
  ];

  const handlePress = () => {
    navigation.navigate("Booking");
  };

  const renderSlider = () => {
    return (
      <View style={styles.sliderContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={() => Math.random().toString()}
          data={sliderData}
          renderItem={({ item }) => (
            <Image style={styles.imageStyle} source={item.image} />
          )}
        />
      </View>
    );
  };

  const renderTitle = () => {
    return (
      <View
        style={[
          styles.sliderContainer,
          Gs.flexRow,
          Gs.justifyBetween,
          Gs.itemsCenter,
        ]}
      >
        <View>
          <Text style={[Gs.h1, Gs.textBlack, styles.titleStyle]}>
            Homemade Office
          </Text>
          <Text style={Gs.textGrey}>Jalan Angga Bekerja No. 10</Text>
        </View>
        <View style={[Gs.flexRow, Gs.itemsCenter, Gs.justifyBetween]}>
          <Image
            style={styles.starStyle}
            source={require("../../../assets/icons/star_yellow.png")}
          />
          <Text style={Gs.h3}>4.5/5</Text>
        </View>
      </View>
    );
  };

  const renderAbout = () => {
    return (
      <View style={styles.sliderContainer}>
        <Text style={[Gs.h3, Gs.textBlack, styles.descStyle]}>About</Text>
        <Text style={[Gs.textGrey, styles.descAlign]}>
          Lorem space curated dolor si amet deep work without distraction from
          any edge si solor. Fiesto si fast charging club and go-getter Internet
          zonn absurb prixomoti anneheil available today
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={[Gs.h3, Gs.textBlack, styles.ownerTitleStyle]}>
          Space Owner
        </Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            style={styles.ownerProfileStyle}
            source={require("../../../assets/images/profile_2.png")}
          />
          <View>
            <View style={[Gs.flexRow, Gs.itemsCenter]}>
              <Text style={styles.ownerNameStyle}>Junebug</Text>
              <Image
                source={require("../../../assets/icons/verified_orange.png")}
              />
            </View>
            <Text style={[Gs.h4, Gs.font700]}>@junebug</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <View>
          <Text style={[Gs.h1, Gs.textPrimary]}>$5,899</Text>
          <Text style={Gs.textGrey}>/day</Text>
        </View>
        <ButtonPrimary
          title="Start Booking"
          icon={require("../../../assets/icons/arrow_right_white.png")}
          onPress={handlePress}
          customStyle={styles.buttonStyle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subTitle="Space available for today"
        showRightButton={require("../../../assets/icons/menu.png")}
      />
      <ScrollView>
        {renderSlider()}
        {renderTitle()}
        {renderAbout()}
        {renderOwner()}
      </ScrollView>
      {renderFooter()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  sliderContainer: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  ownerContainer: {
    paddingBottom: 44,
    paddingHorizontal: 24,
  },
  footerContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    ...Gs.itemsCenter,
    paddingVertical: 28,
    paddingHorizontal: 24,
  },
  titleStyle: {
    marginBottom: 2,
  },
  starStyle: {
    marginRight: 6,
  },
  imageStyle: {
    ...Gs.cornerXL,
    width: 205,
    height: 260,
    marginRight: 20,
  },
  descStyle: {
    marginBottom: 6,
  },
  descAlign: {
    textAlign: "justify",
    lineHeight: 28,
  },
  ownerTitleStyle: {
    marginBottom: 12,
  },
  ownerNameStyle: {
    marginRight: 2,
  },
  ownerProfileStyle: {
    marginRight: 10,
  },
  buttonStyle: {
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
});
