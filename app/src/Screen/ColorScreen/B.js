import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import C from '../ColorScreen/C.js';
export default class B extends Component {
  render() {
    return (
      // <View style={CSS.containerB}>
      //   <Text> textInComponent </Text>
      // </View>
      // <C backgroundColor={this.props.backgroundColor} />
      <C/>
    );
  }
}
// const CSS = StyleSheet.create({
//   containerB: {
//     flex: 1,
//     backgroundColor: 'yellow',
//   },
// });
