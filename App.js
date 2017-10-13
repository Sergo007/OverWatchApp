import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './Title';
import ListViewArticles from './listview/ListViewArticles';


export default class App extends Component {

  render() {
    return (
      <View style={styles.app}>
        <Title>Owerwathch Insight</Title>
        <ListViewArticles style={styles.container}></ListViewArticles>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#dddddd',
  },
  container: {
    marginTop: -5,
  },
});
