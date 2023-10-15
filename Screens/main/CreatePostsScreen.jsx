import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Border, Color, FontFamily, FontSize } from "../../styles/globalStyles";

export const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const isNotDisabled = photo && title && location;

  const takePicture = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    console.log(photo.uri);
  };

  const handleDelete = () => {
    setPhoto(null);
    setTitle("");
    setLocation("");
    navigation.navigate("PostsDefault");
  };

  const handleToggleCamera = () => {
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {photo ? (
          <Image source={{ uri: photo.uri }} style={styles.image} />
        ) : (
          <Camera style={styles.camera} ref={setCamera}></Camera>
        )}
        <TouchableOpacity
          style={{
            ...styles.btnContainer,
            backgroundColor: photo ? Color.transparentWhite : Color.white,
          }}
          activeOpacity={0.5}
          onPress={takePicture}
        >
          <MaterialCommunityIcons
            name="camera"
            size={24}
            color={photo ? Color.white : Color.darkGray}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.downloadBtn} activeOpacity={0.5}>
        <Text style={styles.downloadText}>
          {photo ? "Редагувати фото" : "Завантажте фото"}
        </Text>
      </TouchableOpacity>
      <View style={styles.inputsWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Назва..."
            placeholderTextColor={Color.darkGray}
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View
          style={{
            ...styles.inputContainer,
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Feather name="map-pin" size={24} color={Color.darkGray} />
          <TextInput
            placeholder="Місцевість..."
            placeholderTextColor={Color.darkGray}
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity
          style={{
            ...styles.postBtn,
            backgroundColor: isNotDisabled ? Color.orange : Color.lightGray,
          }}
          activeOpacity={0.5}
          disabled={isNotDisabled ? false : true}
        >
          <Text
            style={{
              ...styles.postText,
              color: isNotDisabled ? Color.white : Color.darkGray,
            }}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.trashBtn}
          activeOpacity={0.5}
          onPress={handleDelete}
        >
          <Feather name="trash-2" size={24} color={Color.darkGray} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    backgroundColor: Color.white,
  },
  cameraContainer: {
    position: "relative",
    height: 240,
    borderWidth: 1,
    borderColor: Color.gray,
    borderRadius: Border.xs,
    // overflow: "hidden",
    marginBottom: 8,
    // backgroundColor: Color.lightGray,
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  image: {
    width: 200,
    height: 230,
    borderWidth: 1,
    borderColor: Color.orange,
  },
  downloadBtn: {
    marginBottom: 32,
  },
  downloadText: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
    color: Color.darkGray,
  },
  inputsWrapper: {
    gap: 16,
    marginBottom: 32,
  },
  inputContainer: {
    paddingTop: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
  },
  input: {
    fontFamily: FontFamily.robotoMedium,
    fontSize: FontSize.m,
    color: Color.dark,
  },
  bottomWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  postBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    borderRadius: Border.l,
  },
  postText: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.m,
  },
  trashBtn: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.lightGray,
  },
});