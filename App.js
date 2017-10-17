import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, PixelRatio} from 'react-native';
import ListViewArticles from './listview/ListViewArticles';
import Title from './Title';

export default class App extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome',
      header:    // Your custom header
        <Title
          navigation={navigation}
          options={{
            title: 'My App Header',
          }}
        > </Title>
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <ListViewArticles style={styles.container} navigation={this.props.navigation}></ListViewArticles>
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
  }
});