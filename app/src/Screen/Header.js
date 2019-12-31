import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height} = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <View style={CSS.Header}>
        <Text style={CSS.textTitle}>Thanh toan</Text>
        <TouchableOpacity>
          <Text style={CSS.textCancel}>Huy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const CSS = StyleSheet.create({
  Header: {
    backgroundColor: '#ff6347',
    height: height / 10,
    justifyContent: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCancel: {
    color: 'white',
    position: 'absolute',
    right: 10,
    bottom: 1,
  },
});
