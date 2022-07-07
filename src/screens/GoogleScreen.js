import {View, Text} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '358934350170-d99oc7flvh8nrjcb1qho76e7pbu5j9sa.apps.googleusercontent.com',
});

const GoogleScreen = () => {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View>
      <Text>GoogleScreen</Text>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

export default GoogleScreen;
