import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';

function AuthScreen(props) {
  const {navigation} = props;

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://www.enjpg.com/img/2020/black-screen-28.jpg',
      }}
      resizeMode="cover">
      <Image
        source={{
          uri: 'https://seeklogo.com/images/N/nato-logo-6CFC766B2C-seeklogo.com.png',
        }}
        style={styles.image}
      />
      <Text style={styles.heading}>Login to continue</Text>

      <TouchableOpacity
        style={styles.login}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.emailText}>Go to Email Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.google}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('GoogleScreen')}>
        <Text style={styles.loginText}>Go to Google Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.facebook}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('FacebookScreen')}>
        <Text style={styles.loginText}>Go to Facebook Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.twitter}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('TwitterScreen')}>
        <Text style={styles.loginText}>Go to Twitter Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  image: {
    marginBottom: 26,
    width: 120,
    height: 120,
    borderRadius: 150,
    borderColor: '#fff',
    borderWidth: 1,
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '85%',
    height: 50,
    marginBottom: 30,
    borderColor: '#fff',
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#6A1B4D',
  },
  login: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  google: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'red',
  },
  facebook: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
  },
  twitter: {
    width: '85%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'green',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginTop: -20,
    marginRight: 'auto',
    marginLeft: 50,
  },
  link: {
    color: '#E8BD0D',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  fb: {
    marginTop: 20,
  },
});

export default AuthScreen;
