import { createBottomTabNavigator } from 'react-navigation';

import Nav from './StackNav';
import AddNewFoodScreen from '../screens/AddNewFoodScreen/AddNewFoodScreen';
const Tab = createBottomTabNavigator({
    add: {screen: AddNewFoodScreen},
    main: {screen: Nav}
});

export default Tab;
