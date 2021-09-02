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
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {AuthenticationContext} from '../../services/auth-context';

const {width} = Dimensions.get('window');

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  username: yup.string().required('Username is Required'),
});

const Signup = () => {
  const [view, setView] = useState(true);
  let navigation = useNavigation();
  const {onRegister, isLoading, error} = useContext(AuthenticationContext);
  const register = data => {
    console.log('Reg Data', data);
    onRegister(data);
    navigation.navigate('ConfirmSignUp', {username: data.username});
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
          validationSchema={registerValidationSchema}
          initialValues={{
            email: '',
            password: '',
            username: '',
          }}
          onSubmit={values => register(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={styles.daystar_logo} />

              <View style={styles.welcome}>
                <Text style={styles.welcomeMsgSignIn}>Create account,</Text>
                <Text style={styles.welcomeMsg}>
                  Create your personal account
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
              </View>

              {errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Email Address"
                  placeholderTextColor="#9e9e9e"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>

              {errors.email && <Text style={styles.error}>{errors.email}</Text>}

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
                  style={{fontSize: 28, marginRight: 20}}
                  onPress={() => setView(!view)}
                />
              </View>

              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              {/* <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Confirm Password"
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('password_confirmation')}
                  onBlur={handleBlur('password_confirmation')}
                  value={values.password_confirmation}
                  secureTextEntry={true}
                />
              </View> */}

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
                    title="Continue"
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

              {/* <View style={styles.enterRecaptcha}>
                <View style={styles.signUpBtn}>
                  <Button
                    title="Register"
                    onPress={handleSubmit}
                    // disabled={!isValid}
                  />
                </View>
              </View> */}

              <View style={styles.instead}>
                <Text style={styles.text1}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.text}>Login Instead</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Signup;

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

  roleModel: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'normal',
    color: '#2595ED',
    fontFamily: 'Montserrat-Regular',
  },
  formField: {
    marginTop: 8,
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
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
  },

  enterRecaptcha: {
    marginTop: 22,
    flexDirection: 'row',
    width: '100%',
    height: 44,
  },
  signUpBtn: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 3,
  },
  instead: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    // width: '50%',
    marginTop: 16,
  },
  text: {
    color: '#0F1E7A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  text1: {
    color: 'gray',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  daystar: {
    marginTop: 24,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    marginBottom: 50,
  },

  daystarImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  center: {
    color: '#0F1E7A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  error: {
    fontSize: 10,
    color: 'red',
    marginTop: 5,
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
