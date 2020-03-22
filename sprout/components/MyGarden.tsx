/** @format */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PlantCard from "../components/PlantCard";
import { getUserGarden } from "../components/spec/index";

interface Props {
  navigation: any;
  route: any;
}

class MyGarden extends Component<Props> {
  state = {
    isInGarden: true,
    myPlants: [],
    isLoading: true,
    isEmpty: true,
  };

  componentDidMount() {
    getUserGarden(this.props.route.params.username).then(garden => {
      if (garden.length === 0) this.setState({ isLoading: false });
      else
        this.setState({ myPlants: garden, isLoading: false, isEmpty: false });
    });
  }

  render() {
    if (this.state.isLoading)
      return (
        <View>
          <Text>'Loading...'</Text>
        </View>
      );
    if (this.state.isEmpty)
      return (
        <View>
          <Text>
            "Start scanning and adding plants to your garden to see them here!"
          </Text>
        </View>
      );
    else
      return (
        <View>
          <Text>MyGarden</Text>
          {this.state.myPlants.map(plant => {
            return (
              <PlantCard
                plantInfo={plant}
                navigation={this.props.navigation}
                isInGarden={true}
              />
            );
          })}
        </View>
      );
  }
}

export default MyGarden;
