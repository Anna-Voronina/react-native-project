import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, FlatList, StyleSheet } from "react-native";
import { PostItem } from "../../components/PostItem";
import { Color } from "../../styles/globalStyles";

export const DefaultScreen = () => {
  const [posts, setPosts] = useState([]);
  const route = useRoute();

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: Color.white,
    paddingBottom: 50,
  },
});
