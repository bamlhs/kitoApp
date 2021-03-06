import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FoodListScreen from '../screens/FoodListScreen/FoodListScreen';

import colors from '../Config';
import FoodItemScreen from '../screens/FoodItemScreen/FoodItemScreen';


const Nav = createStackNavigator({
    home: { screen: HomeScreen },
    foods: { screen: FoodListScreen },
    fooditem: { screen: FoodItemScreen }
}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: colors.secondColor
            }
        }
    });

export default Nav;
