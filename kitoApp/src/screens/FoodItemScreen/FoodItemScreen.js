import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from 'react-native-elements';


class FoodItemScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Avatar
          xlarge
          source={{ uri: this.props.foods.selectedItem.large }}
          rounded />
        <Text> {this.props.foods.selectedItem.title} </Text>
      </View>
    );
  }
}
const mapStateToprops = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToprops)(FoodItemScreen);