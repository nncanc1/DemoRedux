import React, {Component} from 'react';
import {Text, View, StyleSheet, AsyncStorage, TouchableOpacity, Dimensions} from 'react-native';
import AppNavigator from '../AppNavigator.js';
import LoginScreen from '../Screen/LoginScreen.js';
import User from '../Data/User.json';
const {height} = Dimensions.get('window');
export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  componentWillMount() {
    this.load_data();
  }
  load_data = async () => {
    let data = await AsyncStorage.getItem('Login');
    let user = User.find(item => item.id == data);
    console.log(user)
    this.setState(user);
  };
  logout = async () => {
    await AsyncStorage.removeItem('Login');
    this.props.navigation.navigate('HomeScreen');
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={CSS.containerUser}>
        <Text style={CSS.text}> {this.state.username} </Text>
        <Text style={CSS.text}> {this.state.password} </Text>
        <TouchableOpacity style={CSS.btnLogout} onPress={this.logout}>
          <Text style={CSS.textLog}>DANG XUAT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const CSS = StyleSheet.create({
  containerUser: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  btnLogout: {
    backgroundColor: 'red',
    height: height / 12,
    width: '98%',
    borderRadius: 35,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#fff',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 7,
    justifyContent: 'center',
  },
  textLog: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
