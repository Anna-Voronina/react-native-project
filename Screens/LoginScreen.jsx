import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { Input } from "../components/Input";
import { ConfirmBtn } from "../components/ConfirmBtn";
import { Redirect } from "../components/Redirect";
import { AuthTitle } from "../components/AuthTitle";
import { Password } from "../components/Password";
import useKeyboardVisibility from "../hooks/useKeyboardVisibility";
import { Border, Color } from "../styles/globalStyles";

export const LoginScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useKeyboardVisibility();

  return (
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
          <Input placeholder="Адреса електронної пошти" />
          <Password />
        </View>
      </KeyboardAvoidingView>
      <ConfirmBtn title="Увійти" />
      <Redirect firstPart="Немає акаунту?" secondPart="Зареєструватися" />
    </View>
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
