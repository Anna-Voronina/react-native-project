import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { PlusIcon } from "../components/icons/PlusIcon";
import { AuthTitle } from "../components/AuthTitle";
import { Input } from "../components/Input";
import { ConfirmBtn } from "../components/ConfirmBtn";
import { Redirect } from "../components/Redirect";
import { Color, Border, FontFamily, FontSize } from "../styles/globalStyles";
import { Password } from "../components/Password";

export const RegisterScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <PlusIcon styles={styles.icon} />
      </View>
      <AuthTitle title="Реєстрація" />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <Input placeholder="Логін" />
          <Input placeholder="Адреса електронної пошти" />
          <Password />
        </View>
      </KeyboardAvoidingView>
      <ConfirmBtn title="Зареєстуватися" />
      <Redirect firstPart="Вже є акаунт?" secondPart="Увійти" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "70%",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 74,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.m,
    borderTopLeftRadius: Border.m,
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    borderRadius: Border.s,
    backgroundColor: Color.lightGray,
  },
  icon: {
    position: "absolute",
    bottom: 14,
    right: -13,
    backgroundColor: Color.white,
    borderRadius: 50,
  },
  inputContainer: {
    rowGap: 16,
    marginBottom: 43,
  },
});
