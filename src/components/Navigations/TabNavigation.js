import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/HomeScreen';
import Profile from '../../screens/ProfileScreen';
import Item from '../../screens/ItemScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          } else if (route.name === 'Item') {
            iconName = focused ? 'apps-outline' : 'apps-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#000',
          elevation: 6,
          borderTopWidth: 0,
          height: 56,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Item" component={Item} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
