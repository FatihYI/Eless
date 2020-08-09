import React, {Component} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class ProductRegistryInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textName: '',
      textPrice: '',
      textPlace: '',
    };
  }

  checkInputFields = () => {
    const {textName, textPrice, textPlace} = this.state;
    let productRegistry = {information: {name: '', price: '', place: ''}};

    if (textName !== '' && textPrice !== '' && textPlace !== '') {
      // console.warn(this.productRegistry.information);
      productRegistry.information.name = textName;
      productRegistry.information.price = textPrice;
      productRegistry.information.place = textPlace;
      console.warn(productRegistry.information);
      this.props.navigation.navigate('ProductRegistryDescription', {
        productRegistry: productRegistry,
      });
    } else {
      Alert.alert(
        'Eingabefelder nicht vollständig ausgefüllt',
        'Bitte füllen sie alle Eingabefelder',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  render() {
    const {textName, textPrice, textPlace} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Produkt Information</Text>

            <Text>Wie lautet der Name Ihres Produktes</Text>

            <TextInput
              style={styles.textinput}
              placeholder={'Name'}
              underlineColorAndroid={'transparent'}
              value={textName}
              onChangeText={(text) => {
                this.setState({
                  textName: text,
                });
              }}
            />

            <Text>Wie viel soll das Produkt kosten ?</Text>

            <TextInput
              style={styles.textinput}
              placeholder={'Preis'}
              keyboardType="number-pad"
              underlineColorAndroid={'transparent'}
              value={textPrice}
              onChangeText={(text) => {
                this.setState({
                  textPrice: text,
                });
              }}
            />

            {/*ToDO AutoComplete InputField einfügen mit den Städte namen */}
            <Text>Wo befindet sich das Produkt ?</Text>

            <TextInput
              style={styles.textinput}
              placeholder={'Standort'}
              underlineColorAndroid={'transparent'}
              value={textPlace}
              onChangeText={(text) => {
                this.setState({
                  textPlace: text,
                });
              }}
            />

            {/*ToDo button einen Pfeil einfügen */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.checkInputFields();
              }}>
              <Text style={styles.btntext}>
                3. Schritt ->(Pfeil nach rechts)
              </Text>
            </TouchableOpacity>
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
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  textinput: {
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

export default ProductRegistryInformation;
