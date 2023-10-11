import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../styles/globalStyles";

export const Redirect = ({ firstPart = "", secondPart = "" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.redirectText}>{firstPart}</Text>
      <Text style={{ ...styles.redirectText, textDecorationLine: "underline" }}>
        {secondPart}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 4,
  },
  redirectText: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.blue,
    textAlign: "center",
  },
});
