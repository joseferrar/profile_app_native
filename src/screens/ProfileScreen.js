import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';

const Profile = props => {
  const {navigation} = props;
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        navigation.replace('Login');
      });
  };

  const handleNotification = () => {
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: 1,
      title: 'hello',
      message: 'New york',
      picture:
        'https://media.gettyimages.com/photos/logo-of-the-nato-picture-id545006681?s=612x612',
    });
  };

  return (
    <View>
      <Text>Hello {auth()?.currentUser?.displayName}</Text>
      <Button title="Log out" onPress={logout} />
      <Button title="Notification" onPress={handleNotification} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
