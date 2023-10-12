import { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { PlusIcon } from "../components/icons/PlusIcon";
import { AuthTitle } from "../components/AuthTitle";
import { Input } from "../components/Input";
import { ConfirmBtn } from "../components/ConfirmBtn";
import { Redirect } from "../components/Redirect";
import { Password } from "../components/Password";
import useKeyboardVisibility from "../hooks/useKeyboardVisibility";
import { Background } from "../components/Background";
import { handleCloseKeyboard } from "../utils/handleCloseKeyboard";

import { Color, Border } from "../styles/globalStyles";

export const RegisterScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isKeyboardVisible, setIsKeyboardVisible] = useKeyboardVisibility();

  const handleSubmit = () => {
    const data = { login, email, password };
    console.log(data);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <Background>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <PlusIcon styles={styles.icon} />
          </View>
          <AuthTitle title="Реєстрація" />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.inputContainer,
                marginBottom: isKeyboardVisible ? 100 : 43,
              }}
            >
              <Input
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
              />
              <Input
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <Password value={password} onChangeText={setPassword} />
            </View>
          </KeyboardAvoidingView>
          <ConfirmBtn title="Зареєстуватися" onPress={handleSubmit} />
          <Redirect firstPart="Вже є акаунт?" secondPart="Увійти" />
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 74,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.m,
    borderTopLeftRadius: Border.m,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
  },
});
