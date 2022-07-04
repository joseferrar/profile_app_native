import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Protected from '../../screens/Protected';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import {DateTime, Seconds, Mins, Hours} from '../../services/dateFormet';
const ms = require('ms');

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [schedule, setSchedule] = useState(new Date());
  var currentDateObj = new Date();
  var numberOfMlSeconds = currentDateObj.getTime();
  var addMlSeconds = 60 * 60 * 1000;
  var newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
  let timestamp;
  timestamp = schedule;
  var endTime = new Date();
  var startTime = timestamp;
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
        setSchedule(new Date());

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          // console.log(currentRouteName);
          await analytics().logEvent('screen_count', {
            screen_count: currentRouteName,
            users_screens: `${currentRouteName} ${
              auth()?.currentUser?.displayName
            }`,
            screensTime: `${
              auth()?.currentUser?.displayName
            }_${currentRouteName} (${DateTime(timestamp)} - ${DateTime(
              new Date(),
            )}) (${ms(new Date() - timestamp, {long: true})})`,
          });

          // var EndTime = 1541092163000;
          // var StartTime = 1541077763000;
          // var resolution = new Date() - timestamp;
          // var resolutionTime = resolution / 1000 / 60 / 60;
          // console.log(resolutionTime);

          // var differenceInMiliseconds = endTime - startTime;
          // var differenceInSeconds = differenceInMiliseconds / 1000;
          // var differenceInMinutes = differenceInSeconds / 60;
          // var differenceInHours = differenceInMinutes / 60;
          // console.log('differenceInHours --> ', differenceInHours);

          // // or in short
          // console.log((endTime - startTime) / 3600000);

          console.log(
            previousRouteName,
            ' time -- ',
            ms(new Date() - timestamp, {long: true}),
          );

          // console.log( "Hours --> ", Hours(new Date() - timestamp));
          // console.log( "Mins --> ", Mins(new Date() - timestamp));
          // console.log( "Seconds --> ", Seconds(new Date() - timestamp)); //scatch
          // console.log(
          //   `${currentRouteName} use ${
          //     auth()?.currentUser?.displayName
          //   } on ${DateTime(timestamp)} - ${DateTime(new Date())}`,
          // );
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
