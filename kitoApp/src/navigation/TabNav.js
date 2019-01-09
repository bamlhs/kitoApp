import { createBottomTabNavigator } from 'react-navigation';

import Nav from './StackNav';
import AddNewFoodScreen from '../screens/AddNewFoodScreen/AddNewFoodScreen';
const Tab = createBottomTabNavigator({
    main: {screen: Nav},
    add: {screen: AddNewFoodScreen}
});

export default Tab;
