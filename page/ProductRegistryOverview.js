import React, {Component} from 'react';
import {Text, View} from 'react-native';

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
    // const {
    //   productRegistry,
    // } = this.props.navigation.state.params.productRegistry;
    // console.warn(productRegistry);
    return (
      <View>
        <Text>Hier kommt die übersicht</Text>
      </View>
    );
  }
}

export default ProductRegistryOverview;
