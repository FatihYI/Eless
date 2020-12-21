import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import OverviewPage from './OverviewPage';

class ProductView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <ScrollView>
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
                fontSize: 29,
                fontWeight: '700',
                borderBottomWidth: 15,
                borderBottomColor: 'white',
              }}>
              Top Städte
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Herne',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Herne</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Oberhausen',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Oberhausen</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Gelsenkirchen',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Gelsenkirchen</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Marl',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Marl</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Dortmund',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Dortmund</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Recklinghausen',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Recklinghausen</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('OverviewPage', {
                  selectedPlace: 'Herten',
                })
              }>
              <View
                style={{
                  textAlign: 'right',
                  flexDirection: 'row',
                  padding: 3,

                  borderTopWidth: 2,
                  borderTopColor: '#E9E8E8',
                  borderTopStyle: 'solid',
                }}>
                <Text style={{flex: 1, textAlign: 'left'}}>Herten</Text>
              </View>
            </TouchableOpacity>
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
