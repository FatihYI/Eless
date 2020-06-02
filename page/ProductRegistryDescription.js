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

import {CheckBox} from 'react-native-elements';

class ProductRegistryDescription extends Component {
  constructor(props) {
    super(props);
    console.warn(this.props.navigation.state.params.productRegistry);
    this.state = {
      textDescription: '',
      checkHelal: false,
      checkVegetable: false,
    };
  }

  checkInputFields = () => {
    const {textDescription, checkHelal, checkVegetable} = this.state;
    let productRegistry = {
      information: {name: '', price: '', place: ''},
      description: {
        productDescription: '',
        productCheckHelal: false,
        productCheckVegetabler: false,
      },
    };

    if (textDescription !== '') {
      // console.warn(this.productRegistry.information);
      productRegistry.information = this.props.navigation.state.params.productRegistry;
      productRegistry.description.productDescription = textDescription;
      productRegistry.description.productCheckHelal = checkHelal;
      productRegistry.description.productCheckVegetabler = checkVegetable;
      console.warn(productRegistry);
      this.props.navigation.navigate('ProductRegistryOverview', {
        productRegistry: productRegistry,
      });
    } else {
      Alert.alert(
        'Eingabefelder nicht vollständig ausgefüllt',
        'Bitte füllen sie die Produktbeschreibung aus',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  render() {
    const {textDesciption, checkHelal, checkVegetable} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Produkt Beschreibung</Text>

            <Text>Beschreiben sie Ihr Produkt</Text>

            <TextInput
              style={styles.textarea}
              placeholder={'Produktbeschreibung'}
              multiline={true}
              underlineColorAndroid={'transparent'}
              textAlignVertical={'top'}
              value={textDesciption}
              onChangeText={(text) => {
                this.setState({
                  textDescription: text,
                });
              }}
            />

            <Text>
              Hier können Sie zusätzliche Informationen zum Produkt geben?
            </Text>

            {/* ToDo Zusätzliche Informationen füllen und Checkbox bug beheben hat einen Zusammenhang mit den Reactnative Elements siehe Insallations anleitung! */}
            <CheckBox
              title="Helal"
              onPress={() => {
                this.setState({
                  checkHelal: !checkHelal,
                });
              }}
            />
            <CheckBox
              title="Vegetarisch"
              onPress={() => {
                this.setState({
                  checkVegetable: !checkVegetable,
                });
              }}
            />

            {/*ToDo button einen Pfeil einfügen */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // this.props.navigation.navigate('Home');
                this.checkInputFields();
              }}>
              <Text style={styles.btntext}>Fertig</Text>
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
  textarea: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    minHeight: 150,
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

export default ProductRegistryDescription;
