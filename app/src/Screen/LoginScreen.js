import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import User from '../Data/User.json';
import UserScreen from './UserScreen.js';
import AppNavigator from '../AppNavigator.js';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        username: '',
        password: '',
        inputTextValue: true,
      };
    }
  }
  // onEnterText = inputTextValue => {
  //   if (inputTextValue.trim() !== 0) {
  //     this.setState({inputTextValue: true});
  //   } else {
  //     this.setState({inputTextValue: false});
  //   }
  // };
  componentWillMount(){
    this.isLogged();
  }
  login = async () => {
    const navigate = this.props.navigation;
    let user = User.find(
      item =>
        item.username === this.state.username &&
        item.password === this.state.password,
    );
    if ((this.state.username === '' && this.state.password === '') || !user) {
      this.setState({inputTextValue: false});
    } else {
      await AsyncStorage.setItem('Login', JSON.stringify(user.id));
      console.log(user);
      this.props.navigate('UserScreen');
    }
  };
  isLogged = async () => {
    let isLoggedin = await AsyncStorage.getItem('Login');
    console.log(isLoggedin);
    this.props.navigate(!isLoggedin ? 'HomeScreen' : 'UserScreen');
  };
  // btnClickLogin = () => {
  //   const navigate = this.props;
  //   const user = User.find(
  //     item =>
  //       item.username === this.state.username &&
  //       item.password === this.state.password,
  //   );
  //   if ((this.state.username === '' && this.state.password === '')) {
  //     this.setState({inputTextValue: false});
  //   } else {
  //     console.log(user)
  //     this.props.navigate('UserScreen');

  //   }
  // };
  render() {
    return (
      <View style={CSS.containetLogin}>
        <View style={CSS.viewLogin}>
          <TouchableOpacity style={CSS.toulogin}>
            <Text style={CSS.textlogin}>DANG NHAP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CSS.toulogin}>
            <Text style={CSS.textlogin}>DANG KY</Text>
          </TouchableOpacity>
        </View>
        <View style={CSS.viewContent}>
          <TextInput
            placeholder="Email/So dien thoai"
            onChangeText={inputTextValue =>
              this.setState({username: inputTextValue})
            }
            underlineColorAndroid={this.state.inputTextValue ? 'blue' : 'red'}
          />
          <TextInput
            placeholder="Mat khau"
            onChangeText={inputTextValue =>
              this.setState({password: inputTextValue})
            }
            underlineColorAndroid={this.state.inputTextValue ? 'blue' : 'red'}
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style={CSS.btnLog} onPress={this.login}>
              <Text style={CSS.textLog}>DANG NHAP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const CSS = StyleSheet.create({
  containetLogin: {
    flex: 1,
  },
  viewLogin: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
  },
  toulogin: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textlogin: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  viewContent: {
    flex: 1,
    margin: 20,
  },
  btnLog: {
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
