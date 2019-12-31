import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import B from '../ColorScreen/B.js';
import D from '../ColorScreen/D.js';

import {connect} from 'react-redux'; // chua trong thu vien do
class A extends Component {
  render() {
    // const color = this.props.backgroundColor ? 'red' : 'blue';
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => 
          this.props.dispatch({type: 'change_color'})
        }>
        <D />
      </TouchableOpacity>

      // <B backgroundColor={this.props.backgroundColor} />
    );
  }
}
// function mapStateToProps(state){
//   return {
//     backgroundColor:this.state.backgroundColor,
//   };
// }
export default connect(function(state) {
  return {backgroundColor: state.backgroundColor};
})(A);
