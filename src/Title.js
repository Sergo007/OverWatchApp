import React, { Component } from 'react'
import {View, Text, StyleSheet, PixelRatio, TouchableOpacity} from 'react-native';

export default class Title extends Component {

  render() {
    const {navigation, options} = this.props;
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text> BACK </Text>
        </TouchableOpacity>
        <Text style={styles.title}> {options.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff9c00',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    elevation: 5
  },
  title: {
    textAlign: 'left',
    color: 'white',
  },
});
