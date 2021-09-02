/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation, useRoute} from '@react-navigation/native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import {AuthenticationContext} from '../../services/auth-context';

const {width} = Dimensions.get('window');

const confirmCodeValidationSchema = yup.object().shape({
  code: yup.number().required('Password is required'),
});

const ConfirmRegister = () => {
  let navigation = useNavigation();
  const route = useRoute();
  const {confirmSignUp} = useContext(AuthenticationContext);

  const confirmCode = data => {
    console.log('confirmation Data', data);
    confirmSignUp(route.params.username, data.code);
    navigation.navigate('Login');
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
          validationSchema={confirmCodeValidationSchema}
          initialValues={{
            // username: '',
            code: '',
          }}
          onSubmit={values => confirmCode(values)}>
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
                <Text style={styles.welcomeMsg}>
                  Enter your confirmation code to continue
                </Text>
              </View>
              {/* <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Confirmation"
                  placeholderTextColor="#9e9e9e"
                  onChangeText={handleChange('code')}
                  onBlur={handleBlur('code')}
                  value={values.code}
                />
              </View> */}
              <View style={styles.inputContainer}>
                <SmoothPinCodeInput
                  cellStyle={{
                    borderBottomWidth: 5,
                    borderColor: 'gray',
                  }}
                  cellStyleFocused={{
                    borderColor: 'black',
                  }}
                  value={values.code}
                  codeLength={6}
                  onTextChange={handleChange('code')}
                />
              </View>

              {/* {errors.code && <Text style={styles.error}>{errors.code}</Text>} */}

              <View style={{width: '100%', marginTop: 20}}>
                <Button
                  style={styles.loginBtn}
                  title="Continue"
                  onPress={handleSubmit}
                  //   disabled={!isValid}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default ConfirmRegister;

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
    marginTop: 120,
    width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  welcomeMsg: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'gray',
  },
  formField: {
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    // alignSelf: 'center',
    width: '90%',
    height: 50,
    marginTop: 40,
    marginBottom: 50,
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },

  textInput: {
    width: '100%',
    fontSize: 12,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
  },

  loginBtn: {
    marginTop: 26,
  },

  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  error: {
    fontSize: 10,
    color: 'red',
    marginTop: 5,
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
});
