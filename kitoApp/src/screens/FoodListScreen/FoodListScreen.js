import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import axios from 'axios';
import _ from 'lodash';

import { getData, selectedItem } from '../../redux/actions/foodActions';
import { connect } from 'react-redux';

class FoodListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.renderItem = this.renderItem.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
  }
  componentDidMount() {
    const url = 'URL';
    axios.get(url)
      .then(resp => {
        this.setState({ data: resp.data });
        this.props.getData(resp.data)
      }
      )
      .catch(err => console.log(err));
  }
  onSelectItem = (item) => {
    this.props.selectedItem(item);
    this.props.navigation.navigate('fooditem');
  }
  renderItem = ({ item, index }) => {
    return (
      <ListItem
        onPress={this.onSelectItem.bind(this, item)}
        title={item.title}
        avatar={{ uri: item.thumb }}
        roundAvatar
        subtitle={item.category.name} />
    );
  }
  render() {
    if (this.state.data.length === 0) {
      return (
        <View style={{ flex: 1, }}>
          <Text>...Loading</Text>
        </View>
      );
    }


    return (
      <View style={{ flex: 1 }}>
        <View>
          <FlatList
            data={this.props.foods.data}
            keyExtractor={(item, index) => item.nid}
            extraData={this.props.foods.data}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
const mapStateToprops = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToprops, { getData, selectedItem })(FoodListScreen);