import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

class ProductRegistryOverview extends Component {
  // overview = () => {
  //   if (this.props.navigation.state.params) {
  //     if (this.props.navigation.state.params.productRegistry) {
  //       const {
  //         productRegistry,
  //       } = this.props.navigation.state.params.productRegistry;
  //       return (
  //         <View>
  //           <Text>{productRegistry.information.name}</Text>
  //           <Text>{productRegistry.information.price}</Text>
  //           <Text>{productRegistry.information.place}</Text>
  //           <Text>{productRegistry.description.productDescription}</Text>
  //           <Text>{productRegistry.description.productCheckHelal}</Text>
  //           <Text>{productRegistry.description.productCheckVegetabler}</Text>
  //         </View>
  //       );
  //     }
  //   }
  // };

  render() {
    const productRegistryInf = this.props.navigation.state.params
      .productRegistry.information.information;
    //= this.props.navigation.state.params.productRegistry.information.information;
    const productRegistryDes = this.props.navigation.state.params
      .productRegistry.description;
    console.warn(productRegistryDes);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Übersicht</Text>

            <Text style={styles.subHeader}>Name:</Text>
            <Text style={styles.textinput}>{productRegistryInf.name}</Text>

            <Text style={styles.subHeader}>Preis:</Text>
            <Text style={styles.textinput}>{productRegistryInf.price}</Text>

            <Text style={styles.subHeader}>Ort:</Text>
            <Text style={styles.textinput}>{productRegistryInf.place}</Text>

            <Text style={styles.subHeader}>Helal:</Text>
            <Text style={styles.textinput}>
              {productRegistryDes.productCheckHelal}
            </Text>

            <Text style={styles.subHeader}>Beschreibung:</Text>
            <Text style={styles.textinput}>
              {productRegistryDes.productDescription}
            </Text>

            <Text style={styles.subHeader}>Vegetarisch:</Text>
            <Text style={styles.textinput}>
              {productRegistryDes.productCheckVegetabler}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60,
  },

  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 34,
    color: 'black',
    marginTop: 15,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 15,
    color: 'grey',
    paddingTop: 10,
    marginTop: 15,
    //borderTopColor: 'grey',
    //borderTopWidth: 1,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  textinput: {
    fontSize: 20,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
    borderBottomColor: '#E9E8E8',
    borderBottomWidth: 1,
  },

  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductRegistryOverview;
