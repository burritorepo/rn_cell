import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Camera, Permissions } from 'expo';

class Camara extends React.Component {
  state = {
    switchValue: false,
    hasCameraPermission: null, //Permission value
    type: Camera.Constants.Type.back, //specifying app start with back camera.
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>
        </View>
      );
    } else {
      return (<View style={styles.container}>
        <View style={styles.switchview}>
          <Text>Show camera</Text>
       
          <Switch
            onValueChange={value => {
              this.setState({ switchValue: value });
            }}
            value={this.state.switchValue}
            style={styles.switch}
          />
        </View>
        
        {this.state.switchValue ? (
          <View style={styles.cameraview}>
            <Text>Camera on</Text>
          </View>
        ) : (
            <View style={styles.cameraview}>
              <Camera style={styles.camera} type={this.state.type} />
              <Text>Camera off</Text>
            </View>
          )}
      </View>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1dd1a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {
  Camara
};