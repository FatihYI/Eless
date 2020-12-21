import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import ActionButton from 'react-native-action-button';
import {Button, SearchBar} from 'react-native-elements';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Viewport} from '@skele/components';
const Placeholder = () => (
  <View style={{width: 300, height: 300, color: 'red'}} />
);
const ViewportAwareImage = Viewport.Aware(
  Viewport.WithPlaceholder(Image, Placeholder),
);

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.selectedPlaceIsSet = false;
    this.initLoginStatus();
    const ViewportAwareImage = Viewport.Aware(Image);
    this.helal = false;
    this.retrieveFilterData();
  }
  state = {
    search: '',
    refresh: false,
    refreshLogin: false,
    showSearchOptionField: false,
    isHelal: false,
    isVegetable: false,
  };
  updateSearch = (search) => {
    this.setState({search});
  };

  retrieveFilterData = () => {
    try {
      AsyncStorage.multiGet(['helal', 'vegetable'])
        .then((response) => {
          if (response !== null) {
            this.setState({
              isHelal: response[0][1],
              isVegetable: response[1][1],
            });
          }
          // console.warn(response[0][0]); // Key1
          // console.warn(response[0][1]); // Value1
          // console.warn(response[1][0]); // Key2
          // console.warn(response[1][1]); // Value2
        })
        .done();
    } catch (error) {}
  };

  filterPlaces = (products) => {
    const {isHelal, isVegetable} = this.state;

    if (this.props.route) {
      if (this.props.route.params) {
        if (this.props.route.params.refreshNew) {
          this.retrieveFilterData();
          this.props.route.params.refreshNew = false;
        }
      }
    }

    let filterData = products;

    if (isHelal) {
      if (isHelal.toString() === 'true') {
        this.selectedPlaceIsSet = true; //variablen namen ändern
        products = _.filter(products, {
          helal: true,
        });
      }
    }
    //
    if (isVegetable) {
      if (isVegetable.toString() === 'true') {
        this.selectedPlaceIsSet = true; //variablen namen ändern
        products = _.filter(products, {
          vegetable: true,
        });
      }
    }

    if (this.state.search !== '') {
      products = _.filter(products, {description: this.state.search});
      return products;
    } else {
      return products;
    }
  };

  displaySelectedPlace = () => {
    const {isHelal, isVegetable} = this.state;

    const filterData = [
      {key: 'Helal', value: isHelal ? isHelal.toString() : 'false'},
      {
        key: 'Vegetarisch',
        value: isVegetable ? isVegetable.toString() : 'false',
      },
    ];

    //wenn kein true vorhanden ist dann im filterView eine leere <View/> angeben

    let filterView = filterData.map((element) => {
      if (element.value === 'true') {
        return (
          <TouchableOpacity
            onPress={() => {
              if (element.key === 'Helal') {
                this.setState({isHelal: false});
                AsyncStorage.setItem('helal', JSON.stringify('false'));
              }
              if (element.key === 'Vegetarisch') {
                this.setState({isVegetable: false});
                AsyncStorage.setItem('vegetable', JSON.stringify('false'));
              }
            }}>
            <View>
              <Text style={{backgroundColor: 'grey', fontSize: 20}}>
                {element.key}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }
    });
    return filterView;
  };

  diesIstTestversuch = () => {
    return (
      <View>
        <Text>Dies ist ein Testversuch aus der Methide heraus</Text>
      </View>
    );
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
    // console.warn(
    //   'initloginStatus: ' + (await AsyncStorage.getItem('isLogged')),
    // );
    //console.warn(isLogged);
  };

  getLoginStatus = async () => {
    let a = await AsyncStorage.getItem('isLogged');
    // console.warn('getLogin: ' + a);
    if (a === 'false') {
      this.props.navigation.navigate('LoginForm');
    } else if (a === 'true') {
      this.props.navigation.navigate('UserView');
    }
  };

  render() {
    const {search, showSearchOptionField} = this.state;
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bab',
        place: 'Herne',
        description: 'Torte',
        price: '15 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63v',
        place: 'Recklinghausen',
        description: 'Kuchen',
        price: '25 $',
        helal: false,
        vegetable: true,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s',
        place: 'Oberhausen',
        description: 'Muffin',
        price: '5 $',
        helal: true,
        vegetable: true,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s45',
        place: 'Herne',
        description: 'Muffin',
        price: '5 $',
        helal: false,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s45sdfsdf',
        place: 'Herne',
        description: 'Muffin',
        price: '5 $',
        helal: true,
        vegetable: true,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dqwq',
        place: 'Oberhausen',
        description: 'Schokolade',
        price: '5 $',
        helal: false,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72fwq',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dsaf',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72ffds',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
        helal: false,
        vegetable: true,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dbbf',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72frrs',
        place: 'Oberhausen',
        description: 'Cookies',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72dhth',
        place: 'Oberhausen',
        description: 'Bonbon',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7sdfsdfhth',
        place: 'Herten',
        description: 'Schoko',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7sdvsdfhth',
        place: 'Herten',
        description: 'CigKöfte',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7szuouhth',
        place: 'Marl',
        description: 'Hamur',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7szupoihth',
        place: 'Gelsenkirchen',
        description: 'Corba',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7ssdagghth',
        place: 'Dortmund',
        description: 'IcliKöfte',
        price: '5 $',
        helal: true,
        vegetable: false,
      },
    ];

    console.warn('helal:' + this.state.isHelal);
    console.warn('Vegetarisch:' + this.state.isVegetable);

    return (
      <>
        <SearchBar
          placeholder="Suche"
          onChangeText={this.updateSearch}
          value={search}
          //clearIcon={true}
          containerStyle={styles.searchBarContainer}
        />
        <Viewport.Tracker>
          <ScrollView>
            <View style={styles.searchOptionContainer}>
              <>{this.displaySelectedPlace()}</>

              <View style={styles.searchOptionIconContainer}>
                <Icon
                  raised
                  name="sort"
                  type="font-awesome"
                  color="grey"
                  size={25}
                  style={{marginRight: 10}}
                  onPress={() => {
                    this.test();
                  }}
                />
                <Icon
                  raised
                  name="filter"
                  type="font-awesome"
                  color="grey"
                  size={25}
                  onPress={() => {
                    this.props.navigation.navigate('FilterView', {
                      refreshNew: true,
                      helal: this.state.isHelal,
                      vegetable: this.state.isVegetable,
                    });
                  }}
                />
              </View>
            </View>

            <ViewportAwareImage
              onViewportEnter={() => {
                this.setState({showSearchOptionField: false});
              }}
              onViewportLeave={() => {
                this.setState({showSearchOptionField: true});
              }}
              preTriggerRatio={0.01}
              retainOnceInViewport={true}
            />

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
                      helal={item.helal}
                      vegetable={item.vegetable}
                    />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </ScrollView>
        </Viewport.Tracker>

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

        {showSearchOptionField ? (
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              alignSelf: 'center',
              flex: 1,
              flexDirection: 'row',
              backgroundColor: 'dimgrey',
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              height: 50,
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <Button
              onPress={() => {
                this.test();
              }}
              buttonStyle={{
                backgroundColor: 'dimgrey',
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
              }}
              icon={
                <Icon
                  raised
                  name="sort"
                  type="font-awesome"
                  color="white"
                  size={25}
                  style={{border: 600}}
                />
              }
              title={'Sortieren'}
              titleStyle={{marginLeft: 5}}
            />

            <Button
              onPress={() => {
                this.props.navigation.navigate('CityView');
              }}
              buttonStyle={{
                backgroundColor: 'dimgrey',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}
              icon={
                <Icon
                  raised
                  name="filter"
                  type="font-awesome"
                  color="white"
                  size={25}
                />
              }
              title={'Filter'}
              titleStyle={{marginLeft: 5}}
            />
          </View>
        ) : null}

        {/*<View*/}
        {/*  style={{*/}
        {/*    backgroundColor: 'blue',*/}
        {/*    bottom: 0,*/}
        {/*    width: 20,*/}
        {/*    height: 100,*/}
        {/*    position: 'absolute',*/}
        {/*  }}>*/}
        {/*  <Icon*/}
        {/*    raised*/}
        {/*    name="sort"*/}
        {/*    type="font-awesome"*/}
        {/*    color="grey"*/}
        {/*    size={25}*/}
        {/*    style={{backgroundColor: 'black'}}*/}
        {/*    onPress={() => {*/}
        {/*      alert('dsa');*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</View>*/}
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
  searchBarContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  searchOptionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'blue',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchOptionIconContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    height: 30,
    alignItems: 'center',
  },
});

export default OverviewPage;
