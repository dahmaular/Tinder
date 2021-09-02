import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Card from '../components/TinderCard';
import users from '../../assets/data/users';

import AnimatedStack from '../components/AnimatedStack';

import {AuthenticationContext} from '../services/auth-context';

const HomeScreen = () => {
  const {useR} = useContext(AuthenticationContext);
  console.log(useR);
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <View>
        <Text>Hello {useR.username} </Text>
      </View>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color="#FBD88B" />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={24} color="#F76C6B" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={24} color="#3AB4CC" />
        </View>
        <View style={styles.button}>
          <FontAwesome name="heart" size={24} color="#4FCC94" />
        </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={24} color="#A65CD2" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  },
});

export default HomeScreen;
