import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

class ProductView extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <Image
            source={require('../Image/Tortejpg.jpg')}
            style={styles.imageContainer}
          />

          {/*margin verschiebt den container und padding gibt inneren Abstand an*/}
          <View style={styles.productInfoContainer}>
            <Text style={styles.productNameContainer}>
              {this.props.productName}sdfsdfds
            </Text>
            <Text style={styles.productPriceContainer}>
              {this.props.productPrice}dsfdsf
            </Text>
            <Text style={styles.productPlaceContainer}>
              {this.props.productPlace}sdfdsf
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderTopWidth: 7,
              borderTopColor: '#E9E8E8',
              borderTopStyle: 'solid',
            }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '700',
                borderBottomWidth: 15,
                borderBottomColor: 'white',
              }}>
              Details
            </Text>

            <View
              style={{
                textAlign: 'right',
                flexDirection: 'row',
                padding: 3,

                borderTopWidth: 2,
                borderTopColor: '#E9E8E8',
                borderTopStyle: 'solid',
              }}>
              <Text style={{flex: 1, textAlign: 'left'}}>Helal?</Text>
              <Text style={{flex: 1, textAlign: 'right', color: '#CDCDCD'}}>
                Ja
              </Text>
            </View>

            <View
              style={{
                textAlign: 'right',
                flexDirection: 'row',
                padding: 3,
                borderTopWidth: 2,
                borderTopColor: '#E9E8E8',
                borderTopStyle: 'solid',
              }}>
              <Text style={{flex: 1, textAlign: 'left'}}>Vegetarisch?</Text>
              <Text style={{flex: 1, textAlign: 'right', color: '#CDCDCD'}}>
                Nein
              </Text>
            </View>

            <View
              style={{
                textAlign: 'right',
                flexDirection: 'row',
                padding: 3,
                borderTopWidth: 2,
                borderTopColor: '#E9E8E8',
                borderTopStyle: 'solid',
              }}>
              <Text style={{flex: 1, textAlign: 'left'}}>Lecker?</Text>
              <Text style={{flex: 1, textAlign: 'right', color: '#CDCDCD'}}>
                Ja
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderTopWidth: 7,
              borderTopColor: '#E9E8E8',
              borderTopStyle: 'solid',
            }}>
            <Text style={{fontSize: 19, fontWeight: '700'}}>Beschreibung</Text>

            <View style={{backgroundColor: 'white'}}>
              <Text style={{width: '100%', textAlign: 'left'}}>
                {this.productDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    resizeMode: 'cover',
    width: '100%',
  },
  productInfoContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  productNameContainer: {
    fontSize: 19,
    fontWeight: '700',
  },
  productPriceContainer: {
    color: 'green',
    fontSize: 17,
    fontWeight: '700',
  },
  productPlaceContainer: {
    color: 'grey',
  },
});

export default ProductView;
