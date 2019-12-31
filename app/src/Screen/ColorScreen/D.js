import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class D extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     backgroundColor: true,
  //   };
  // }
  // onclick = () => {
  //   this.setState({backgroundColor: !this.state.backgroundColor});
  // };
  render() {
    const color = this.props.backgroundColor ? 'red' : 'blue';

    return (
      // <TouchableOpacity
      //   style={{
      //     backgroundColor: this.state.backgroundColor ? 'red' : 'blue',
      //     flex: 1,
      //   }}
      //   onPress={this.onclick}>
      //   {/* <Text>{this.props.backgroundColor}</Text> */}
      // </TouchableOpacity>
      // <TouchableOpacity
      //   style={{flex: 1,color}}
      //   onPress={() => {
      //     this.props.dispatch({type: 'change_color'});
      //   }}>
      // </TouchableOpacity>

        <View style={{backgroundColor: color, flex:1}}></View>
    );
  }
}
export default connect(function(state) {
  return {backgroundColor: state.backgroundColor};
})(D);
