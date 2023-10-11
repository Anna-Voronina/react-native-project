import { StyleSheet, View } from "react-native";
import { Input } from "../components/Input";
import { ConfirmBtn } from "../components/ConfirmBtn";
import { Redirect } from "../components/Redirect";
import { AuthTitle } from "../components/AuthTitle";
import { Password } from "../components/Password";
import { Border, Color } from "../styles/globalStyles";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AuthTitle title="Увійти" />
      <View style={styles.inputContainer}>
        <Input placeholder="Адреса електронної пошти" />
        <Password />
      </View>
      <ConfirmBtn title="Увійти" />
      <Redirect firstPart="Немає акаунту?" secondPart="Зареєструватися" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "60%",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: Color.white,
    borderTopRightRadius: Border.m,
    borderTopLeftRadius: Border.m,
  },
  inputContainer: {
    rowGap: 16,
    marginBottom: 43,
  },
  passwordContainer: {
    position: "relative",
  },
});
