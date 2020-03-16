/** @format */
import 'react-native-gesture-handler';
import { Component } from 'react';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as api from '../api';

interface Props {
  navigation: any;
}

class CameraPage extends Component<Props> {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back
  };

  camera: Camera | null = null;

  async componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === 'granted') {
        this.setState({ rollGranted: true });
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.setState({ hasPermission: status === 'granted' });
    }
  };

  takePicture = async () => {
    console.log('Picture Taken!');
    if (this.camera) {
      const options = { base64: true };
      let photo = await this.camera.takePictureAsync(options);
      api.getPlantById(photo);
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result, 'result');
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { hasPermission } = this.state;

    if (hasPermission === null) {
      return (
        <View>
          <Button
            title='Go to My Garden'
            onPress={() => this.props.navigation.navigate('MyGarden')}
          />
          <Button
            title='Go to My Account'
            onPress={() => this.props.navigation.navigate('UserPage')}
          />
        </View>
      );
    } else if (hasPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>
          <Button
            title='Go to My Garden'
            onPress={() => this.props.navigation.navigate('MyGarden')}
          />
          <Button
            title='Go to My Account'
            onPress={() => this.props.navigation.navigate('UserPage')}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.cameraType}
            ref={ref => {
              this.camera = ref;
            }}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent'
              }}
              onPress={() => this.takePicture()}>
              <FontAwesome
                name='camera'
                style={{ color: '#fff', fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'transparent'
              }}
              onPress={() => this.pickImage()}>
              <Ionicons
                name='ios-photos'
                style={{ color: '#fff', fontSize: 40 }}
              />
            </TouchableOpacity>
          </Camera>
          <Button
            title='Go to My Garden'
            onPress={() => this.props.navigation.navigate('MyGarden')}
          />
          <Button
            title='Go to My Account'
            onPress={() => this.props.navigation.navigate('UserPage')}
          />
        </View>
      );
    }
  }
}

export default CameraPage;
