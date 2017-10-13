import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {

  render() {
    const {children} = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff9c00',
    width: '100%',
    padding: 15,
    elevation: 5
  },
  title: {
    textAlign: 'left',
    color: 'white',
  },
});
