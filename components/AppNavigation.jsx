import { NavigationContainer } from "@react-navigation/native";
import { defineRoute } from "../utils/router";

export const AppNavigation = () => {
  const routing = defineRoute(false);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
