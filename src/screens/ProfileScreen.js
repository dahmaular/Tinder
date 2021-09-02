import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

import {AuthenticationContext} from '../services/auth-context';

const ProfileScreen = () => {
  const {useR, onLogout} = useContext(AuthenticationContext);
  const [user, setUser] = useState(null);
  // const onLogout = () => {
  //   Auth.signOut();
  // };

  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = {username: data.username, ...data.attributes};
      setUser(userInfo);
      console.log(user);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  // useEffect(() => {
  //   checkUser();
  // }, []);

  const route = useRoute();
  console.log(route.params);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {/* <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
          Profile Screen
        </Text> */}
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Avatar.Image
            size={150}
            source={{uri: 'https://source.unsplash.com/user/erondu/1600x900'}}
          />
          <TouchableOpacity onPress={onLogout}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 5}}>
          <Text>{useR?.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default ProfileScreen;
