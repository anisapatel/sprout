import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import * as api from "../api";

export default class PlantMap extends React.Component {
  state = {
    region: {
      latitude: 53.79490447820361,
      longitude: -1.54636837019936,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      //   latitude: 37.321996988,
      //   longitude: -122.0325472123455,
    },
    gardenCentres: [],
    errorMessage: "",
  };

  async componentDidMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      console.log("Permission not granted!");
      this.setState({ errorMessage: "Permission not granted!" });
    }
    const userLocation = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
      ...this.state.region,
    };
    await this.setState({ region });
    this.fetchGardenCentres();
  };

  fetchGardenCentres = () => {
    return new Promise((resolve, reject) => {
      resolve(
        api.getGardenCentres(
          this.state.region.latitude,
          this.state.region.longitude
        )
      );
    }).then(info => {
      this.setState({ gardenCentres: info });
    });
  };

  createMarkers() {
    return this.state.gardenCentres.map(centre => {
      return <Marker coordinate={centre.coords} title={centre.name} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          showsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          }}
        >
          {this.createMarkers()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
