/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {AuthenticationContext} from '../../services/auth-context';

const {width} = Dimensions.get('window');

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    // .email('Please enter valid email')
    .required('Username is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = () => {
  const [view, setView] = useState(true);
  let navigation = useNavigation();
  const {onLogin, isLoading, error} = useContext(AuthenticationContext);
  const login = data => {
    console.log('Login Data', data);
    onLogin(data.username, data.password);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1}}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={values => login(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={styles.welcome}>
                <Text style={styles.welcomeMsgSignIn}>Sign in,</Text>
                <Text style={styles.welcomeMsg}>Sign in to your account,</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>

              {errors.username ? (
                <Text style={styles.error}>{errors.username}</Text>
              ) : (
                <></>
              )}

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={view}
                />
                <AntDesign
                  name={view ? 'eye' : 'eyeo'}
                  color={'#c4c4c4'}
                  style={{fontSize: 20, marginRight: 20}}
                  onPress={() => setView(!view)}
                />
              </View>

              {errors.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : (
                <></>
              )}

              {error && (
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 10,
                  }}>
                  <Text> {error}</Text>
                </View>
              )}
              {!isLoading ? (
                <View style={styles.btnView}>
                  <Button
                    style={styles.loginBtn}
                    title="Login"
                    onPress={handleSubmit}
                  />
                </View>
              ) : (
                <ActivityIndicator
                  style={{marginTop: 10}}
                  size="large"
                  animating={true}
                  color="#069BC9"
                />
              )}

              {/* <View style={styles.OR}>
                <View style={styles.firstLine} />
                <Text style={styles.option}>OR</Text>
                <View style={styles.secondLine} />
              </View>

              <TouchableOpacity style={styles.whiteBtn}>
                <Text style={styles.googleText}>Sign in with Google</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={styles.signEmail}>
                <Text style={styles.emailText}>Sign Up With Email</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
    height: '100%',
    width: width,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },

  welcome: {
    marginTop: 69,
    width: '100%',
    flexDirection: 'column',
  },

  welcomeMsg: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    color: 'gray',
  },
  welcomeMsgSignIn: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#316F8A',
    paddingBottom: 10,
  },
  formField: {
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },

  textInput: {
    width: '90%',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
  },

  btnView: {
    width: '100%',
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },

  loginBtn: {
    marginTop: 26,
    borderRadius: 10,
  },

  OR: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  firstLine: {
    borderColor: '#DFDFDF',
    borderWidth: 1,
    width: 142,
  },

  secondLine: {
    borderColor: '#DFDFDF',
    borderWidth: 1,
    width: 142,
  },

  option: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#858585',
  },

  whiteBtn: {
    marginTop: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    width: '100%',
    height: 44,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 3,
  },

  googleText: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    fontStyle: 'normal',
    color: 'gray',
  },

  googleImage: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  signEmail: {
    marginTop: 19,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  emailText: {
    color: '#4E4D4D',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 5,
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
});
