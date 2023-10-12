import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { Input } from "../components/Input";
import { ConfirmBtn } from "../components/ConfirmBtn";
import { Redirect } from "../components/Redirect";
import { AuthTitle } from "../components/AuthTitle";
import { Password } from "../components/Password";
import { Background } from "../components/Background";
import useKeyboardVisibility from "../hooks/useKeyboardVisibility";
import { handleCloseKeyboard } from "../utils/handleCloseKeyboard";

import { Border, Color } from "../styles/globalStyles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isKeyboardVisible, setIsKeyboardVisible] = useKeyboardVisibility();

  const handleSubmit = () => {
    const data = { email, password };
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <Background>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <View style={styles.container}>
          <AuthTitle title="Увійти" />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.inputContainer,
                marginBottom: isKeyboardVisible ? 75 : 43,
              }}
            >
              <Input
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <Password value={password} onChangeText={setPassword} />
            </View>
          </KeyboardAvoidingView>
          <ConfirmBtn title="Увійти" onPress={handleSubmit} />
          <Redirect firstPart="Немає акаунту?" secondPart="Зареєструватися" />
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 120,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.m,
    borderTopLeftRadius: Border.m,
  },
  inputContainer: {
    rowGap: 16,
  },
  passwordContainer: {
    position: "relative",
  },
});
