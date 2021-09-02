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
import CheckBox from '@react-native-community/checkbox';
import {styles} from './auth-styles';

const registerValidationSchema = yup.object().shape({
  // email: yup
  //   .string()
  //   .email('Please enter valid email')
  //   .required('Email Address is Required'),
  // password: yup
  //   .string()
  //   .min(8, ({min}) => `Password must be at least ${min} characters`)
  //   .required('Password is required'),
  username: yup.string().required('Username is Required'),
});

export const RegisterScreen = ({navigation}) => {
  const register = data => {
    const allData = {
      data: data,
      isMan: man,
      isWoman: woman,
      interestedInMan: meetMan,
      interestedInWoman: meetWoman,
    };
    console.log('Reg Data', allData);
    navigation.navigate('Register2', {allData});
  };

  const [man, setMan] = useState(true);
  const [woman, setWoman] = useState(false);
  const [meetMan, setmeetMan] = useState(false);
  const [meetWoman, setMeetWoman] = useState(false);

  const setToggle = () => {
    setMan(!man);
    setWoman(!woman);
  };

  const setMeetManToggle = () => {
    setmeetMan(!meetMan);
  };

  const setMeetWomanToggle = () => {
    setMeetWoman(!meetWoman);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Personal Info</Text>
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
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="My Username is ..."
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
                <Text style={styles.toggle}>I am a?</Text>
                <CheckBox
                  disabled={false}
                  value={man}
                  onChange={() => setToggle(!man)}
                />
                <Text style={styles.toggle}>Man </Text>
                <CheckBox
                  disabled={false}
                  value={woman}
                  onChange={() => setToggle(!woman)}
                />
                <Text style={styles.toggle}>Woman </Text>
              </View>

              {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}

              <View style={styles.inputContainer}>
                <Text style={styles.toggle}>Interested in?</Text>
                <CheckBox
                  disabled={false}
                  value={meetMan}
                  onValueChange={() => setMeetManToggle()}
                />
                <Text style={styles.toggle}>A Man </Text>
                <CheckBox
                  disabled={false}
                  value={meetWoman}
                  onValueChange={() => setMeetWomanToggle()}
                />
                <Text style={styles.toggle}>A woman </Text>
              </View>

              {/* {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )} */}

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
