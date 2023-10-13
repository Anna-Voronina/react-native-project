import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen } from "./PostsScreen";
import { CommentsScreen } from "./CommentsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { MapScreen } from "./MapScreen";
import { ProfileScreen } from "./ProfileScreen";

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTabs.Navigator initialRouteName="Posts">
      <MainTabs.Screen name="Posts" component={PostsScreen} />
      <MainTabs.Screen name="Comments" component={CommentsScreen} />
      <MainTabs.Screen name="Create" component={CreatePostsScreen} />
      <MainTabs.Screen name="Map" component={MapScreen} />
      <MainTabs.Screen name="Profile" component={ProfileScreen} />
    </MainTabs.Navigator>
  );
};
