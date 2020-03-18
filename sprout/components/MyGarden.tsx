/** @format */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PlantCard from '../components/PlantCard';

interface Props {
  plantInfo: any;
  navigation: any;
}

class MyGarden extends Component<Props> {
  state = {
    myPlants: [
      {
        commonName: 'bottle-palm',
        difficulty: 'green',
        duration: 'n/a',
        family: 'Lily family',
        lightLevel: 'Medium',
        minTemp: 15,
        ph: 6.5,
        precipitation: 70,
        scientificName: 'Beaucarnea recurvata',
        wateringSchedule: 'medium: once a week'
      }
    ],
    myScannedPlants: []
  };
  render() {
    return (
      <View>
        <Text>MyGarden</Text>
        {this.state.myPlants.map(plant => {
          return (
            <PlantCard plantInfo={plant} navigation={this.props.navigation} />
          );
        })}
      </View>
    );
  }
}

export default MyGarden;
