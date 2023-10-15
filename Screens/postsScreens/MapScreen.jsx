import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker title="I am here" coordinate={location} description="Hello" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
