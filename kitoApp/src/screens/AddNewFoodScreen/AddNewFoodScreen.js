import React, { Component } from 'react';
import { SafeAreaView, Text, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import axios from 'axios';
export default class AddNewFoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cat: '',
      error: false,
    };
    this.onSaveFood = this.onSaveFood.bind(this);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');


  }
  onSaveFood = () => {
    const { title, cat } = this.state;
    const url = 'POST_URL';
    console.log(title);
    convate
    axios.post(url, { title, cat, image })
      .then(resp => console.log(resp)
      )
      .catch(err => {
        this.setState({ error: true })
      }
      )
  }

  render() {
    console.log(this.state.error);

    if (this.state.error) {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }
    return (
      <SafeAreaView>
        <FormLabel>Title</FormLabel>
        <FormInput autoCorrect={false} onChangeText={(title) => this.setState({ title })
        } />
        <FormLabel>Category</FormLabel>
        <FormInput onChangeText={(cat) => this.setState({ cat })
        } />
        <Button onPress={this.onSaveFood} title="Save it" />
      </SafeAreaView>
    );
  }
}
