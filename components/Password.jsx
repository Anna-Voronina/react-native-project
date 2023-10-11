import { Pressable, StyleSheet, Text, View } from "react-native";
import { Input } from "./Input";
import { Color, FontFamily, FontSize } from "../styles/globalStyles";

export const Password = () => {
  return (
    <View style={styles.passwordContainer}>
      <Input placeholder="Пароль" />
      <Pressable style={styles.showBtn}>
        <Text style={styles.showBtnTitle}>Показати</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showBtnTitle: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.blue,
  },
});
