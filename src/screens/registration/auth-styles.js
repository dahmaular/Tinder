/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../structure/theme/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.quaternary,
  },
  signUpText: {
    color: '#FFFFFF',
  },
  toggle: {
    fontSize: 24,
    color: '#9e9e9e',
    marginRight: 10,
  },
  btn: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.brand.primary,
    elevation: 5,
    shadowColor: colors.ui.primary,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
  },
  scrollContainer: {
    flex: 1,
    height: '100%',
    width: width,
    backgroundColor: colors.ui.quaternary,
    paddingHorizontal: 20,
    marginTop: 10,
  },

  inputContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },

  textInput: {
    width: '100%',
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
    color: '#000000',
  },

  signUpBtn: {
    padding: 10,
    marginTop: 40,
  },

  text: {
    color: '#0F1E7A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },

  error: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
    fontStyle: 'normal',
    fontFamily: 'Montserrat-Regular',
  },
  header: {
    marginTop: 40,
    padding: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#9e9e9e',
  },
});
