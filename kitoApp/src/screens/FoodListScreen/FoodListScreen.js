import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import axios from 'axios';
import _ from 'lodash';


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
      <ListItem
        title={item.title}
        avatar={{ uri: item.thumb }}
        roundAvatar
        subtitle={item.category.name} />
    );
  }
  render() {
    console.log(this.state.data.length === 0);

    if (this.state.data.length === 0) {
      console.log("inisde if");

      return (
        <View style={{ flex: 1, }}>
          <Text>...Loading</Text>
        </View>
      );
    }
    const newData = _.orderBy(this.state.data, ['title'], ['asc'])
    return (
      <View style={{ flex: 1 }}>
        <View></View>
        <View>
          <FlatList
            data={newData}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
