import {StyleSheet, Text, View, Button, DevSettings} from 'react-native';
import React, {useState, useEffect} from 'react';
import analytics from '@react-native-firebase/analytics';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  notificationListener,
  requestUserPermission,
} from '../services/notification';
import {DateTime} from '../services/dateFormet';

const Home = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore().collection('users').get();
      await setList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    fetchData();
    requestUserPermission();
    notificationListener();
  }, []);
  console.log(list);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('Basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
      <Button
        title="Login user"
        onPress={async () =>
          await analytics().logEvent('User_auth', {
            id: await auth()?.currentUser?.uid,
            username: await auth()?.currentUser?.displayName,
            email: await auth()?.currentUser?.email,
          })
        }
      />
      <Button title="All user" onPress={async () => DevSettings.reload()} />
      <Text>{DateTime(new Date())}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
