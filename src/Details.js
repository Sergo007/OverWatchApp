import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ArticleItem from './listview/ArticleItem';
import NavigationBar from './NavigationBar';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: -5,
  }
});

export default class Details extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: 'Welcome',
      header:    // Your custom header
        <NavigationBar
          navigation={navigation}
          options={{
            title: params.article.data.title
          }}
        > </NavigationBar>
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.app}>
        <ArticleItem article={params.article} navigation={this.props.navigation}></ArticleItem>
      </View>
    );
  }
}
