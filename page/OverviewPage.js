import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import ActionButton from 'react-native-action-button';
import {SearchBar, Icon} from 'react-native-elements';
import _ from 'lodash';

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.selectedPlaceIsSet = false;
  }

  state = {
    search: '',
    refresh: false,
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  filterPlaces = (products) => {
    let filterData = products;
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

    if (this.state.search !== '') {
      filterData = _.filter(filterData, {description: this.state.search});
      return filterData;
    } else {
      return filterData;
    }
  };

  test = () => {
    //alert('testMethod');
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
          onPress={() => this.props.navigation.navigate('CityView')}
        />
        {this.test()}

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
            this.props.navigation.navigate('ProductRegistryImage');
          }}
          offsetY={5}
          offsetX={5}
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
