import React, {Component} from 'react';
import {FlatList, Text, StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import Title from './Title';

const rows = [
  {
    id: 0,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 1,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 2,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 3,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 4,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 5,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 6,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 7,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 8,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 9,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }, {
    id: 10,
    data: {
      categoryName: 'New Hero',
      lastActive: '21 mins ago',
      imgUrl: '',
      title: 'Symmetra',
      description: 'fdsa fdsafdsafd safdsaf dsafds afdsafd afdsafdsa',
      likes: 12
    }
  }
];

const extractKey = ({id}) => id;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.row_categoryName}>{item.data.categoryName}</Text>
        <Text style={styles.row_lastActive}>{item.data.lastActive}</Text>
        <Image
          style={styles.row_img}
          source={require('./img/test_support.png')}
        />
        <Text style={styles.row_title}>{item.data.title}</Text>
        <Text style={styles.row_description}>{item.data.description}</Text>
        <View style={styles.row_horizontalLine}></View>
        <View style={styles.row_buttons}>
          <View style={styles.row_button_details}>
            <Text style={{color: '#fff'}}>hero</Text>
          </View>
          <View style={styles.row_button_likes}>
            <Text>256</Text>
            <Image
              style={styles.button_like}
              source={require('./img/like.png')}
            />
          </View>
        </View>
      </View>
    );
  };

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(rows));
      this.setState({
        isLoading: false,
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
        <View style={styles.app}>
          <Title>Owerwathch Insight</Title>
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator/>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.app}>
        <Title>Owerwathch Insight</Title>
        <FlatList
          style={styles.container}
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
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
    flex: 1,
  },
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
