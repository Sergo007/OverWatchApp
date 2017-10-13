import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

export default class ArticleItem extends Component {

  render() {
    const article = this.props.article;
    return (
      <View style={styles.row}>
        <Text style={styles.row_categoryName}>{article.data.categoryName}</Text>
        <Text style={styles.row_lastActive}>{article.data.lastActive}</Text>
        <Image
          style={styles.row_img}
          source={{uri: 'https://dreambit.io/test_requests/test_support.png'}}
        />
        <Text style={styles.row_title}>{article.data.title}</Text>
        <Text style={styles.row_description}>{article.data.description}</Text>
        <View style={styles.row_horizontalLine}></View>
        <View style={styles.row_buttons}>
          <View style={styles.row_button_details}>
            <Text style={{color: '#fff'}}>hero</Text>
          </View>
          <View style={styles.row_button_likes}>
            <Text>256</Text>
            <Image
              style={styles.button_like}
              source={require('../img/like.png')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    elevation: 3
  },
  row_title: {
    fontSize: 20,
    color: '#000',
  },
  row_lastActive: {
    fontSize: 12,
    color: '#bcc1c7',
  },
  row_description: {
    fontSize: 18,
    color: '#596574',
  },
  row_categoryName: {
    fontSize: 14,
    color: '#000',
  },
  row_horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e0e2e4',
    marginTop: 25,
    marginBottom: 25
  },
  row_buttons: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row_button_details: {
    width: 60,
    height: 30,
    backgroundColor: '#8190ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  row_button_likes: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button_like: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  row_img: {
    width: '100%',
    height: 150,
    marginTop: 15,
    marginBottom: 15
  }
});
