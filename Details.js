import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, PixelRatio} from 'react-native';
import ListViewArticles from './listview/ListViewArticles';
import ArticleItem from './listview/ArticleItem';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
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
    const { params } = navigation.state;
    return {
      title: 'Welcome',
      header:    // Your custom header
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text> BACK </Text>
          </TouchableOpacity>
          <Text style={styles.title}> {params.article.data.title} </Text>
        </View>
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
