import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, PixelRatio} from 'react-native';
import ListViewArticles from './listview/ListViewArticles';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  container: {
    marginTop: -5,
  },

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

export default class Details extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome',
      header:    // Your custom header
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> BACK </Text>
          </TouchableOpacity>
          <Text style={styles.title}> details </Text>
        </View>
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <Text>details</Text>
      </View>
    );
  }
}
