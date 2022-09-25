import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {Home} from '../screens/Home';
import {useTheme} from 'styled-components';
import {RFValue} from 'react-native-responsive-fontsize';
import {Welcome} from '../screens/Welcome';

const {Navigator, Screen} = createBottomTabNavigator();

const AppTabRoutes = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: RFValue(70),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 11,
        },
        tabBarActiveTintColor: theme.colors.action_items,
        tabBarInactiveTintColor: theme.colors.text_details,
        tabBarLabelPosition: 'below-icon',
        tabBarHideOnKeyboard: true,

        tabBarLabel: ({color, focused}) =>
          focused ? (
            <IconEntypo size={25} color={color} name="dot-single" />
          ) : (
            <IconEntypo size={25} color={'transparent'} name="dot-single" />
          ),
      }}>
      <Screen
        name="HomePage"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <IconFontAwesome size={size} color={color} name="home" />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabRoutes;
