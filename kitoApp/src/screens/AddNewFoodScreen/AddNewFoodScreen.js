import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import axios from 'axios';
import { connect } from 'react-redux';
import postData from '../../redux/actions/foodActions';

class AddNewFoodScreen extends Component {
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
    this.props.postData({ title, cat });
    axios.post(url, { title, cat })
      .then(resp => console.log(resp)
      )
      .catch(err => {
        this.setState({ error: true })
      });
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
        <Button onPress={this.onSaveFood} title="Save it" />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({ foods: state.foods });
export default connect(mapStateToProps, { postData })(AddNewFoodScreen);

