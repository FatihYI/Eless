import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import OverviewCard from '../components/OverviewCard';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class OverviewPage extends Component {
  render() {
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bab',
        place: 'Herne',
        description: 'Tortesddssdfdsf',
        price: '15 $',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63v',
        place: 'Recklinghausen',
        description: 'Kuchensdfdsfdfsdfsdsdsfdsfdfs',
        price: '25 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72s',
        place: 'Oberhausen',
        description: 'Muffinafsdasafsdfsdsda',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72d',
        place: 'Oberhausen',
        description: 'Muffinsfdsfafasfaaa',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72f',
        place: 'Oberhausen',
        description: 'Muffindsfdsdsfsdf',
        price: '5 $',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72d',
        place: 'Oberhausen',
        description:
          'Muffinsdffdsdssddasfasdfdasasdfasdafsafsdasdssdfasdsadsdaadsfadsadsdfas',
        price: '5 $',
      },
    ];

    return (
      <>
        <FlatList
          data={DATA}
          style={styles.flexListContainer}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
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
            this.props.navigation.navigate('Registry');
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
