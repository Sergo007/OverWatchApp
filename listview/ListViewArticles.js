import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import ArticleItem from './ArticleItem';

const extractKey = ({id}) => id;

export default class ListViewArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  renderItem = ({item}) => {
    return (
      <ArticleItem article={item}></ArticleItem>
    );
  };

  componentDidMount() {
    fetch('https://dreambit.io/test_requests/rows.json', {
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
        rows: responseJson
      }, function () {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <FlatList
        style={styles.container}
        data={this.state.rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
