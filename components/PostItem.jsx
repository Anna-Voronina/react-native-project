import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../styles/globalStyles";

export const PostItem = ({ post }) => {
  const { photoUri, location, title, locationCoords } = post;

  const navigation = useNavigation();

  const handleCommentsClick = () => {
    navigation.navigate("Comments", { photoUri });
  };

  const handleLocation = () => {
    navigation.navigate("Map", { locationCoords });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photoUri }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <TouchableOpacity
          style={styles.commentsBtn}
          activeOpacity={0.5}
          onPress={handleCommentsClick}
        >
          <Feather
            name="message-circle"
            size={24}
            color={Color.darkGray}
            style={{
              transform: [{ rotate: "270deg" }],
            }}
          />
          <Text style={styles.commentsNumber}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationBtn}
          activeOpacity={0.5}
          onPress={handleLocation}
        >
          <Feather name="map-pin" size={24} color={Color.darkGray} />
          <Text style={styles.locationTitle}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 32,
  },
  image: {
    height: 240,
    borderRadius: Border.xs,
  },
  title: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.m,
    color: Color.dark,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  commentsBtn: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  commentsNumber: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.darkGray,
  },
  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationTitle: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.dark,
    textDecorationLine: "underline",
  },
});
