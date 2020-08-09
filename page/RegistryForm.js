import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

class RegistryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  }

  checkInputFields = () => {
    const {username, firstname, lastname, email, password} = this.state;

    if (
      username !== '' &&
      firstname !== '' &&
      lastname !== '' &&
      email !== '' &&
      password !== ''
    ) {
      //connect to backend
      fetch('http://192.168.0.210:3000/setUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(async (response) => await response.json())
        .then((res) => {
          if (res.message) {
            console.warn(res.message);
          }
        })
        .done();
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
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Registration</Text>

            <TextInput
              style={styles.textinput}
              placeholder={'Your Firstname'}
              underlineColorAndroid={'transparent'}
              onChangeText={(firstname) =>
                this.setState({
                  firstname,
                })
              }
            />

            <TextInput
              style={styles.textinput}
              placeholder={'Your Lastname'}
              underlineColorAndroid={'transparent'}
              onChangeText={(lastname) =>
                this.setState({
                  lastname,
                })
              }
            />

            <TextInput
              style={styles.textinput}
              placeholder={'Your Username'}
              underlineColorAndroid={'transparent'}
              onChangeText={(username) =>
                this.setState({
                  username,
                })
              }
            />

            <TextInput
              style={styles.textinput}
              placeholder={'Your Email'}
              underlineColorAndroid={'transparent'}
              onChangeText={(email) =>
                this.setState({
                  email,
                })
              }
            />

            <TextInput
              style={styles.textinput}
              placeholder={'Your Password'}
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
              onChangeText={(password) =>
                this.setState({
                  password,
                })
              }
            />

            <TouchableOpacity
              onPress={() => {
                this.checkInputFields();
              }}
              style={styles.button}>
              <Text style={styles.btntext}>Sign up</Text>
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

export default RegistryForm;
