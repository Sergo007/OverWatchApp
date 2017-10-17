import React, {Component} from 'react';
import {View, Text, StyleSheet, PixelRatio, TouchableOpacity} from 'react-native';
import If from './utils/If';
export default class NavigationBar extends Component {

  render() {
    const {navigation, options} = this.props;
    return (
      <View style={styles.header}>
        <If is={options.isShowBackButton}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <Text> BACK </Text>
          </TouchableOpacity>
        </If>
        <Text style={styles.title}> {options.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
