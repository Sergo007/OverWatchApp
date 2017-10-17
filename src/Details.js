import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ArticleItem from './listview/ArticleItem';
import NavigationBar from './NavigationBar';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    marginTop: -5,
  }
});

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
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

  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetch('https://dreambit.io/test_requests/articles/'+params.article.id+'.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        article_with_server: responseJson
      }, function () {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={styles.app}>
        <ArticleItem article={this.state.article_with_server} navigation={this.props.navigation}></ArticleItem>
      </View>
    );
  }
}
