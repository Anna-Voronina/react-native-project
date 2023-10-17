import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { collection, onSnapshot } from "firebase/firestore";

import { PostItem } from "../../components/PostItem";
import { Color } from "../../styles/globalStyles";
import { db } from "../../firebase/config";

export const DefaultScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      onSnapshot(collection(db, "posts"), (doc) => {
        const allPosts = doc.docs
          .map((post) => ({ ...post.data(), id: post.id }))
          .sort((a, b) => b.date - a.date);
        setPosts(allPosts);
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
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
