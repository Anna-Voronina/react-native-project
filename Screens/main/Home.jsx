import { Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { Color, FontFamily, FontSize } from "../../styles/globalStyles";

const MainTabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: FontFamily.robotoMedium,
          fontSize: FontSize.l,
          lineHeight: 22,
          letterSpacing: -0.408,
          color: Color.dark,
        },
      }}
    >
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? Color.orange : Color.fogGray}
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }} activeOpacity={0.5}>
              <Feather name="log-out" size={24} color={Color.fogGray} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto name="plus-a" size={18} color={Color.white} />
          ),
          tabBarItemStyle: {
            alignSelf: "center",
            height: 40,
            maxWidth: 70,
            borderRadius: 20,
            backgroundColor: Color.orange,
          },
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color={Color.fogGray} />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
};
