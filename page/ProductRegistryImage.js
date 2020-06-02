import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {Button, Icon} from 'react-native-elements';

class ProductRegistryImage extends Component {
  render() {
    return (
      <ScrollView>
        {/*ToDO Take a photo through the package react-native-camere follow the installation instructor*/}
        <View>
          <Text>Foto</Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductRegistryInformation')}} style={styles.button}>
            <Text style={styles.btntext}>
              2. Schritt -> (Pfeil Icon rechts)
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductRegistryImage;
