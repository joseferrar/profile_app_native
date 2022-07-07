import {View, Text, NativeModules, Button} from 'react-native';
import React from 'react';

const TwitterScreen = () => {
  const {RNTwitterSignIn} = NativeModules;

  const APIKey = {
    TWITTER_API_KEY: 'yq16Zo2F9soipMcxh44ZUZb2h',
    TWITTER_SECRET_KEY: 'uyNKTQ7EO41wRW5W12lkeZDD6o5mg7DMakEnsnn5BPwPHnNbVC',
  };

  const twitterLogin = async () => {
    await RNTwitterSignIn.init(
      APIKey.TWITTER_API_KEY,
      APIKey.TWITTER_SECRET_KEY,
    );
    await RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log('loginData', loginData);
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <View>
      <Text>TwitterScreen</Text>
      <Button title="Sign in with Twitter" onPress={twitterLogin} />
    </View>
  );
};

export default TwitterScreen;
