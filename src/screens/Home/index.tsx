import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import InputText from "../../components/InputText";
import { colors } from "../../../assets/styles/Colors";
import NewsWorthyItem from "../../components/NewsWorthyItem";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BottomNav from "../../components/BottomNav";

type RootStackParamList = {
  Details: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function Home(): JSX.Element {
  type DetailsScreenNavigationProp = NavigationProp<
    RootStackParamList,
    "Details"
  >;
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const newsWorthyData = [
    {
      title: "Hajime",
      address: "Pantai Utara No. 90",
      price: "$421/day",
      image: require("../../../assets/images/item_2_a.png"),
    },
    {
      title: "Masite",
      address: "Pantai Selatan No. 90",
      price: "$124/day",
      image: require("../../../assets/images/item_3_a.png"),
    },
  ];

  const handlePress = () => {
    navigation.navigate("Details");
  };

  const renderHeader = () => {
    return (
      <View
        style={[
          Gs.flexRow,
          Gs.justifyBetween,
          styles.headerContainer,
          styles.paddingStyle,
        ]}
      >
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            style={styles.marginStyle}
            source={require("../../../assets/images/profile_1.png")}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Shayna</Text>
            <Text style={[Gs.textBlack, Gs.font700]}>@shaynawork</Text>
          </View>
        </View>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            style={styles.marginStyle}
            source={require("../../../assets/icons/gift.png")}
          />
          <Image source={require("../../../assets/icons/notification.png")} />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={[styles.headerContainer, styles.paddingStyle]}>
        <InputText
          icon={require("../../../assets/icons/location.png")}
          placeholder="Find work spaces in Jakarta"
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={[styles.headerContainer, styles.paddingStyle]}>
        <Text style={[Gs.h1, Gs.textBlack, styles.popularTitleStyle]}>
          Popular
        </Text>
        <View style={[Gs.flexRow, styles.popularImageMargin]}>
          <Image
            style={[styles.popularMainImage, styles.marginStyle]}
            source={require("../../../assets/images/item_1_a.png")}
          />
          <View>
            <Image
              style={[styles.popularImage, styles.popularImageMargin]}
              source={require("../../../assets/images/item_1_b.png")}
            />
            <Image
              style={styles.popularImage}
              source={require("../../../assets/images/item_1_c.png")}
            />
          </View>
        </View>
        <View style={[Gs.flexRow, Gs.itemsCenter, Gs.justifyBetween]}>
          <View>
            <Text style={Gs.h2}>IndoorWork</Text>
            <Text style={Gs.textGrey}>Jalan Angga Bekerja No. 10</Text>
          </View>
          <Text style={styles.popularPriceContainer}>$599/day</Text>
        </View>
      </View>
    );
  };

  const renderNewsWorthy = () => {
    return (
      <View style={[styles.newsWorthyContainer, styles.paddingStyle]}>
        <Text style={[Gs.h1, Gs.textBlack, styles.popularTitleStyle]}>
          Newsworthy
        </Text>
        <FlatList
          keyExtractor={(item) => item.title}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={newsWorthyData}
          renderItem={({ item }) => (
            <NewsWorthyItem {...item} onPress={handlePress} />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {renderHeader()}
        {renderSearch()}
        <ScrollView style={styles.scrollContainer}>
          {renderPopularSection()}
          {renderNewsWorthy()}
        </ScrollView>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  paddingStyle: {
    paddingHorizontal: 24,
  },
  marginStyle: {
    marginRight: 10,
  },
  headerContainer: {
    marginBottom: 24,
  },
  popularTitleStyle: {
    marginBottom: 12,
  },
  popularImageMargin: {
    marginBottom: 10,
  },
  popularMainImage: {
    ...Gs.cornerXL,
    flex: 1,
    height: 200,
  },
  popularImage: {
    ...Gs.cornerMD,
    flex: 1,
    width: 130,
    height: 95,
  },
  popularPriceContainer: {
    ...Gs.font600,
    ...Gs.cornerMD,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
    color: colors.primary,
  },
  newsWorthyContainer: {
    paddingBottom: 30,
  },
  scrollContainer: {
    height: "100%",
  },
});
