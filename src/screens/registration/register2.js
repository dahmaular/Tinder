/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';

import {styles} from './auth-styles';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  phone: yup.string().required('First name is Required'),
});

export const Register2Screen = ({navigation}) => {
  const route = useRoute();
  const data1 = route.params;

  const register = data => {
    console.log('Reg Data', data, data1);
    // regData(data, data1);
  };

  const regData = (data, data1) => {
    let awsData = {
      username: data1.allData.data.username,
      password: data.password,
      attributes: {
        email: data.email, // optional
        phone_number: data.phone, // optional - E.164 number convention
        // other custom attributes
      },
    };
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 40, marginLeft: 10, flexDirection: 'row'}}>
        <FontAwesome
          name="chevron-left"
          size={26}
          color="#9e9e9e"
          onPress={() => navigation.goBack()}
        />
        {/* <Text style={styles.toggle}>Back</Text> */}
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Info</Text>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1}}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            phone: '',
            email: '',
            password: '',
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
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Phone number"
                  placeholderTextColor="#9e9e9e"
                  keyboardType="number-pad"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.username}
                />
              </View>

              {errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

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
                  secureTextEntry={true}
                />
              </View>

              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <View style={styles.signUpBtn}>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  <Text style={styles.signUpText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};
