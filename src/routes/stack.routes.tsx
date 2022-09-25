import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FoodCategory} from '../screens/FoodCategory';
import {FoodDetails} from '../screens/FoodDetails';
import {Welcome} from '../screens/Welcome';
import AppTabRoutes from './tab.routes';

const {Navigator, Screen} = createStackNavigator();

const StackWelcome = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={AppTabRoutes} />
      <Screen name="FoodCategory" component={FoodCategory} />
      <Screen name="FoodDetails" component={FoodDetails} />
    </Navigator>
  );
};

export {StackWelcome};
