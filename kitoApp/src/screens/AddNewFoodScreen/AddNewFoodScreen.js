import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Avatar } from 'react-native-elements'
import axios from 'axios';
import { connect } from 'react-redux';
import postData from '../../redux/actions/foodActions';
import ImagePicker from 'react-native-image-picker';



class AddNewFoodScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cat: '',
      error: false,
      image: ''
    };
    this.onSaveFood = this.onSaveFood.bind(this);
    this.getImage = this.getImage.bind(this);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  onSaveFood = () => {
    const { title, cat } = this.state;
    const url = 'POST_URL';
    console.log(title);
    this.props.postData({ title, cat });
    axios.post(url, { title, cat })
      .then(resp => console.log(resp)
      )
      .catch(err => {
        this.setState({ error: true })
      });
  }
  getImage = () => {
    ImagePicker.showImagePicker({}, resp =>
      this.setState({ image: resp.uri })
    )
  }
  render() {
    return (
      <SafeAreaView>
        <FormLabel>Title</FormLabel>
        <FormInput autoCorrect={false} onChangeText={(title) => this.setState({ title })
        } />
        <FormLabel>Category</FormLabel>
        <FormInput onChangeText={(cat) => this.setState({ cat })
        } />

        <FormLabel>Image</FormLabel>
        <Avatar xlarge source={{ uri: this.state.image }}
          onPress={this.getImage}
        />
        <Button onPress={this.onSaveFood} title="Save it" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({ foods: state.foods });
export default connect(mapStateToProps, { postData })(AddNewFoodScreen);

