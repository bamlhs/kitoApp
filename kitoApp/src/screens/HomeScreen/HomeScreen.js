import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'
import styles from './HomeScreenStyle';
import colors from '../../Config';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { width, heigt } = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../images/backgroud.jpg')} >
                    <View style={styles.container}>
                        <View style={{ padding: 10, }}><Button
                            buttonStyle={{ borderColor: colors.secondColor, borderWidth: 3, borderRadius: 10, }}
                            containerViewStyle={{ width: width / 1.2 }}
                            backgroundColor={colors.baseColor}
                            large title="Show Food Lists" />
                        </View>
                        <View><Button
                            buttonStyle={{ borderColor: colors.secondColor, borderWidth: 3, borderRadius: 10, }}
                            backgroundColor={colors.baseColor}
                            containerViewStyle={{ width: width / 1.2 }}
                            large title="Add New Food" /></View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
