import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import axios from 'axios';

export default class FoodListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.renderItem = this.renderItem.bind(this);
  }
  componentDidMount() {
    const url = 'URL';
    axios.get(url)
      .then(resp => this.setState({ data: resp.data }))
      .catch(err => console.log(err));
  }
  renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <View style={{ flexDirection: 'row', }}>
        <Avatar large source={{ uri: item.thumb }} />
        <Text>{item.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View></View>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
