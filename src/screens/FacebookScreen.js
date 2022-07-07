import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk-next';

const FacebookScreen = () => {
  async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    console.log('FB result -->', result);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    console.log('accessToken --> ', data.accessToken);
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    console.log('facebookCredential --> ', facebookCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <View>
      <Text>FacebookScreen</Text>
      <Button
        title="Sign in with Facebook"
        onPress={() =>
          onFacebookButtonPress().then(res =>
            console.log('Signed in with Facebook!' + res),
          )
        }
      />
    </View>
  );
};

export default FacebookScreen;
