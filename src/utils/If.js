import React, {Component} from 'react';
import {View} from 'react-native';

export default class If extends Component {
  render() {
    const {is, children} = this.props;
    if (is) {
      return (
        <View>{children}</View>
      );
    } else {
      return null;
    }
  }
}
