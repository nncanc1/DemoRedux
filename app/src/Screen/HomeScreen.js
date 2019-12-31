import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardView from 'react-native-cardview';
const {width, height} = Dimensions.get('window');
import ViewDemo from './ViewDemo.js';
import Header from './Header.js';
import Payment from './Payment.js';
import LoginScreen from './LoginScreen.js';
import UserScreen from './UserScreen.js';
import A from './ColorScreen/A.js';
import D from './ColorScreen/D.js';
import {Provider} from 'react-redux'; // yarn add react-redux
import {createStore} from 'redux'; //yarn add redux

const defaultState = {backgroundColor: true};
//reducer chua tat cac action mac dinh type: la ten action
const reducer = (state = defaultState, action) => {
  if (action.type === 'change_color')
    return {backgroundColor: !state.backgroundColor};
  return state;//bac buoc  vi khong oc no thi no tra ve undefine
};
const store = createStore(reducer);

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Provider store={store}>
        <View style={CSS.container}>
          {/* <Header navigate={navigate} />
        <LoginScreen navigate={navigate} /> */}
          {/* <UserScreen/> */}
          {/* <ScrollView>
        <Payment />

        </ScrollView> */}
          {/* <ScrollView>
          <ViewDemo />
        </ScrollView> */}
          {/* <TouchableOpacity
          style={{flex: 1, backgroundColor: this.state.backgroundColor}}
          onPress={this.onClick}>
          <A />
        </TouchableOpacity> */}

          {/* <A backgroundColor={this.props.backgroundColor} /> */}
          <A/>
        </View>
      </Provider>
    );
  }
}
const CSS = StyleSheet.create({
  container: {
    flex: 1,
  },
});
