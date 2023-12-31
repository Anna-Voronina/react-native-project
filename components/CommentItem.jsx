import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/formatDate";
import { selectUser } from "../redux/auth/authSelectors";
import { Color, FontFamily, FontSize } from "../styles/globalStyles";

export const CommentItem = ({ data }) => {
  const user = useSelector(selectUser);

  const { comment, userAvatar, date, userId } = data;

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.commentContainer,
          flexDirection: user.id === userId ? "row" : "row-reverse",
        }}
      >
        <View
          style={{
            ...styles.textContainer,
            borderTopLeftRadius: user.id === userId ? 6 : 0,
            borderTopRightRadius: user.id === userId ? 0 : 6,
          }}
        >
          <Text style={styles.text}>{comment}</Text>
          <Text
            style={{
              ...styles.date,
              textAlign: user.id === userId ? "left" : "right",
            }}
          >
            {formatDate(date)}
          </Text>
        </View>
        <Image source={{ uri: userAvatar }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentContainer: {
    gap: 16,
    marginBottom: 24,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.lightBlack,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.s,
    lineHeight: 18,
    color: Color.dark,
    marginBottom: 8,
  },
  date: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: 10,
    color: Color.darkGray,
    textAlign: "right",
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
});
