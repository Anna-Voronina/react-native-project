import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { Background } from "../../components/Background";
import { UserPostItem } from "../../components/UserPostItem";
import { selectUser } from "../../redux/auth/authSelectors";
import { signOutThunk } from "../../redux/auth/authOperations";
import { db } from "../../firebase/config";
import { Border, Color, FontFamily, FontSize } from "../../styles/globalStyles";

export const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "posts"), where("userId", "==", user.id));
      onSnapshot(q, (doc) => {
        const allPosts = doc.docs
          .map((post) => ({ ...post.data(), id: post.id }))
          .sort((a, b) => b.date - a.date);
        setUserPosts(allPosts);
      });
    })();
  }, []);

  const handleSignOut = () => {
    dispatch(signOutThunk());
  };

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logOutBtn}
          activeOpacity={0.5}
          onPress={handleSignOut}
        >
          <Feather name="log-out" size={24} color={Color.darkGray} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: user.avatar }} />
          <TouchableOpacity style={styles.changeBtn} activeOpacity={0.5}>
            <SimpleLineIcons
              name="close"
              size={25}
              color={Color.gray}
              style={styles.avatarIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <FlatList
          data={userPosts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UserPostItem post={item} />}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    maxHeight: "80%",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 70,
    borderTopRightRadius: Border.m,
    borderTopLeftRadius: Border.m,
    backgroundColor: Color.white,
  },
  logOutBtn: {
    alignSelf: "flex-end",
    marginBottom: 46,
  },
  imageContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: Border.s,
  },
  changeBtn: {
    position: "absolute",
    right: 0,
    bottom: 14,
  },
  avatarIcon: {
    borderRadius: 50,
    backgroundColor: Color.white,
  },
  userName: {
    marginBottom: 32,
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.xl,
    letterSpacing: 0.3,
    textAlign: "center",
    color: Color.dark,
  },
});
