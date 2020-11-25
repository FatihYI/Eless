import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import ActionButton from 'react-native-action-button';
import {SearchBar, Icon} from 'react-native-elements';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.selectedPlaceIsSet = false;
    this.initLoginStatus();
  }
  state = {
    search: '',
    refresh: false,
    refreshLogin: false,
  };
  updateSearch = (search) => {
    this.setState({search});
  };

  filterPlaces = (products) => {
    let filterData = products;
    if (this.props.navigation.state) {
      if (this.props.navigation.state.params) {
        console.warn(this.props.navigation.state.params.selectedPlace);
        if (this.props.navigation.state.params.selectedPlace) {
          this.selectedPlaceIsSet = true;
          filterData = _.filter(products, {
            place: this.props.navigation.state.params.selectedPlace,
          });
        } else {
          this.selectedPlaceIsSet = false;
        }
      }
    }

    if (this.state.search !== '') {
      filterData = _.filter(filterData, {description: this.state.search});
      return filterData;
    } else {
      return filterData;
    }
  };

  displaySelectedPlace = () => {
    //alert('testMethod');
    if (this.props.navigation.state) {
      if (this.props.navigation.state.params) {
        if (this.props.navigation.state.params.selectedPlace) {
          return (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.state.params.selectedPlace = null;
                this.selectedPlaceIsSet = false;
                this.setState({
                  refresh: false,
                });
              }}>
              <View>
                <Text style={{backgroundColor: 'grey', fontSize: 20}}>
                  {this.props.navigation.state.params.selectedPlace}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
      }
    }
  };

  async test() {
    //connect to backend
    await fetch('http://192.168.0.36:3000/getProducts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Kullanici adi',
      }),
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.message) {
          console.warn(res.message);
        }
      })
      .done();
  }
  //brauchen wir nicht wenn wir set und get aus logAPI verwenden
  checkLogin = async () => {
    const {refreshLogin} = this.state;

    try {
      this.isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (this.isLoggedIn !== 'true' && refreshLogin === false) {
        //this.isLoggedIn = logInfo;
        //await AsyncStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn = 'true';
        //console.warn('checkLogin: ' + this.isLoggedIn);
        this.setState({refreshLogin: true});
      }
      console.warn('isLoggedIn Variable: ' + this.isLoggedIn);
    } catch (err) {
      console.warn(err);
    }
  };

  async logout() {
    try {
      //await AsyncStorage.setItem('isLoggedIn', this.isLoggedIn.toString());

      if ((await AsyncStorage.getItem('isLogged')) === 'true') {
        await AsyncStorage.setItem('loginData', '');
        await AsyncStorage.setItem('isLogged', 'false');

        alert('Sie sind nun abgemeldet');
      } else {
        alert('Sie sind bereits abgemeldet');
      }
      return true;
    } catch (exception) {
      return false;
    }
  }

  initLoginStatus = async () => {
    const {refresh} = this.state;
    let isLogged = await AsyncStorage.getItem('isLogged');
    if (isLogged === null) {
      await AsyncStorage.setItem('isLogged', 'false');
    }
    console.warn(
      'initloginStatus: ' + (await AsyncStorage.getItem('isLogged')),
    );
    //console.warn(isLogged);
  };

  getLoginStatus = async () => {
    let a = await AsyncStorage.getItem('isLogged');
    console.warn('getLogin: ' + a);
    if (a === 'false') {
      this.props.navigation.navigate('LoginForm');
    } else if (a === 'true') {
      this.props.navigation.navigate('UserView');
    }
  };

  render() {
    const {search} = this.state;
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bab',
        place: 'Herne',
        description: 'Torte',
        price: '15 $',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63v',
        place: 'Recklinghausen',
        description: 'Kuchen',
        price: '25 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s',
        place: 'Oberhausen',
        description: 'Muffin',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s45',
        place: 'Herne',
        description: 'Muffin',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s45sdfsdf',
        place: 'Herne',
        description: 'Muffin',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dqwq',
        place: 'Oberhausen',
        description: 'Schokolade',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72fwq',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dsaf',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72ffds',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dbbf',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72frrs',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dhth',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
      },
    ];

    return (
      <>
        <SearchBar
          placeholder="Suche"
          onChangeText={this.updateSearch}
          value={search}
          //clearIcon={true}
        />
        <Icon
          raised
          name="heartbeat"
          type="font-awesome"
          color="#f50"
          onPress={() => {
            this.test();
          }}
        />
        <Icon
          raised
          name="heartbeat2"
          type="font-awesome"
          color="#f50"
          onPress={() => {
            alert('dsa');
          }}
        />
        {this.displaySelectedPlace()}

        <FlatList
          data={this.filterPlaces(DATA)}
          style={styles.flexListContainer}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
                //ToDo Product array (Item) an ProductView übergeben
                onPress={() => this.props.navigation.navigate('Product')}>
                <OverviewCard
                  place={item.place}
                  description={item.description}
                  price={item.price}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />

        <ActionButton
          onPress={() => {
            //console.warn('render: ' + AsyncStorage.getItem('isLoggedIn'));
            //this.checkLogin();
            // console.warn(this.getLoginStatus());
            this.getLoginStatus();
            //console.warn('In Render: ' + isLogged);
          }}
          offsetY={5}
          offsetX={5}
          buttonColor="rgba(123, 239, 178, 1)"
        />
        <ActionButton
          onPress={() => {
            this.logout();
            //console.warn('render: ' + this.isLoggedIn);
          }}
          offsetY={5}
          offsetX={70}
          buttonColor="rgba(231,76,60,1)"
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  flexListContainer: {
    paddingTop: 10,
    backgroundColor: 'lightgray',
  },
  cardContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    width: '50%',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default OverviewPage;
