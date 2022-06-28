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

export default function Login(props) {
  const {navigation} = props;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: yup.object({
      email: yup.string().email().required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(8, '8 characters required'),
    }),

    onSubmit: async (Data, reset) => {
      console.log(Data);
      auth()
        .signInWithEmailAndPassword(Data.email, Data.password)
        .then(result => {
          navigation.replace('Dashboard');
          reset.resetForm({
            email: '',
            password: '',
          });
        })
        .catch(error => {
          alert(error.message);
        });
    },
  });
  // console.log(auth);
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
      </View>
      {formik.errors.email && formik.touched.email && (
        <Text style={styles.error}>{formik.errors.email}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={formik.values.password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={formik.handleChange('password')}
        />
      </View>
      {formik.errors.password && formik.touched.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <TouchableOpacity
        style={styles.loginBtn}
        activeOpacity={0.6}
        onPress={formik.handleSubmit}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
        Go to Register
      </Text>
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
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
});
