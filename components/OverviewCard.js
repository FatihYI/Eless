import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class OverviewCard extends Component {
  render() {
    return (
      <>
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageContainer}
            source={require('../Image/Tortejpg.jpg')}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.place}>{this.props.place}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.price}>{this.props.price}</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 250,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  infoContainer: {
    padding: 10,
  },
  imageContainer: {
    height: 150,
    width: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  place: {
    color: 'grey',
    fontSize: 13,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    overflow: 'hidden',
    lineHeight: 20,
    height: 40,
  },
  price: {
    color: 'green',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
  },
});
