import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

const Protected = props => {
  const {navigation} = props;

  const detectLogin = async () => {
    await auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Dashboard');
      } else {
        navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    detectLogin();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

Protected.propTypes = {
  navigation: PropTypes.object,
};

export default Protected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242B2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 120,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 8,
  },
});
