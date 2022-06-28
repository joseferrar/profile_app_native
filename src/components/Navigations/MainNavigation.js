import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Protected from '../../screens/Protected';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import {DateTime} from '../../services/dateFormet';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          console.log(currentRouteName);
          await analytics().logEvent('screen_count', {
            screen_count: currentRouteName,
            users_screens: `${currentRouteName} ${
              auth()?.currentUser?.displayName
            }`,
            screensTime: DateTime(new Date()),
          });
          console.log(
            `${currentRouteName} on ${auth()?.currentUser?.displayName}`,
          );
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Protected"
          component={Protected}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
