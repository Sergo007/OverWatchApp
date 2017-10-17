import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ListViewArticles from './listview/ListViewArticles';
import NavigationBar from './NavigationBar';

export default class App extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Welcome',
      header:    // Your custom header
        <NavigationBar
          navigation={navigation}
          options={{
            title: 'My App Header',
            isShowBackButton: false
          }}
        > </NavigationBar>
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