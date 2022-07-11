import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const GithubScreen = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const loginWithGithub = async () => {
    console.log('loginWithGithub');

    const provider = await new auth.GithubAuthProvider();
    setError(null);
    setIsPending(true);
    console.log('provider -->', provider);
    try {
      const res = await auth().signInWithCredential(auth, provider);
      if (!res) {
        throw new Error('Could not complete signup');
      }

      const user = await res.user;
      console.log(user);
      setIsPending(false);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      console.log('signInWithCredential -->', error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return (
    <View>
      <Text>GithubScreen</Text>
      <Button
        title={isPending ? 'Loading...' : 'Login With Github'}
        onPress={loginWithGithub}
      />
    </View>
  );
};

export default GithubScreen;
