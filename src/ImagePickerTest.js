import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

class ImagePickerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePickerResponse: {},
    };

	this.AddImage = this.AddImage.bind(this);
  }

  AddImage = () => {
    var options = {
      title: 'Select Image',
      takePhotoButtonTitle: 'Click a Awesome Pic',
      chooseFromLibraryButtonTitle : 'Choose from your Media',
    };
    //ImagePicker.showImagePicker({}, response => {

      ImagePicker.launchImageLibrary({}, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } 
      else {
        let source = response;
        this.setState({
          imagePickerResponse: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: 'center' }}>
            Image Picker Test
          </Text>
      
          {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.imagePickerResponse.data,
            }}
            style={{ width: 100, height: 100 }}
          /> */}
          <Image
            source={{ uri: this.state.imagePickerResponse.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.imagePickerResponse.uri}
          </Text>
          <Button title="Add Image" onPress={()=>this.AddImage()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImagePickerTest;