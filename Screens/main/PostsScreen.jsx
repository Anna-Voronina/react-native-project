import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { CommentsScreen } from "../postsScreens/CommentsScreen";
import { MapScreen } from "../postsScreens/MapScreen";
import { DefaultScreen } from "../postsScreens/DefaultScreen";
import { Color } from "../../styles/globalStyles";

export const PostsScreen = () => {
  const navigation = useNavigation();
  const PostsScreen = createStackNavigator();

  return (
    <PostsScreen.Navigator
      initialRouteName="PostsDefault"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <PostsScreen.Screen
        name="PostsDefault"
        component={DefaultScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Login")}
            >
              <Feather name="log-out" size={24} color={Color.fogGray} />
            </TouchableOpacity>
          ),
        }}
      />
      <PostsScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
        }}
      />
      <PostsScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Мапа",
        }}
      />
    </PostsScreen.Navigator>
  );
};
