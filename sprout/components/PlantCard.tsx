/** @format */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

interface Props {
  plantInfo: any;
  navigation: any;
}

class PlantCard extends Component<Props> {
  render() {
    const {
      commonName,
      ph,
      lightLevel,
      minTemp,
      wateringSchedule
    } = this.props.plantInfo;
    return (
      <View>
        <Header>{commonName}</Header> //need to check this out
        <Text>
          ph:{ph}, lightLevel:{lightLevel}, minTemp:{minTemp}
        </Text>
        <Text>watering schedule: {wateringSchedule}</Text>
        <Button
          title='View full details'
          onPress={() =>
            this.props.navigation.navigate('PlantPage', {
              plantInfo: this.props.plantInfo
            })
          }
        />
      </View>
      //set reminder to water
      //button to view full plant
    );
  }
}

export default PlantCard;
