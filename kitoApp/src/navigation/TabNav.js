import { createBottomTabNavigator } from 'react-navigation';
import colors from '../Config';
import Nav from './StackNav';
import AddNewFoodScreen from '../screens/AddNewFoodScreen/AddNewFoodScreen';
const Tab = createBottomTabNavigator({

  main: { screen: Nav },
  add: { screen: AddNewFoodScreen },
}, {
    tabBarOptions: {
      activeTintColor: colors.baseColor,
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      activeTabStyle: {
        backgroundColor: 'red',
      },
      style: {
        backgroundColor: colors.tabColor,
      },
    },
  }
);

export default Tab;
