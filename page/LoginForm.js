import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorageStatic,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import log from '../API/logAPI';
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.email = '';
    this.password = '';
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.regform}>
          <Text style={styles.header}>Login</Text>

          <TextInput
            style={styles.textinput}
            placeholder={'Your Email'}
            underlineColorAndroid={'transparent'}
            onChangeText={(email) => this.setEmail(email)}
          />

          <TextInput
            style={styles.textinput}
            placeholder={'Your Password'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            onChangeText={(password) => this.setPassword(password)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              /*log.login(this.email, this.password, this.props)*/ this.login(
                this.email,
                this.password,
              )
            }>
            <Text style={styles.btntext}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}> Don't have an account yet?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Registry');
              }}>
              <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  async login(email, password) {
    //const {email, password, isLoggedIn} = this.state;
    //alert('email: ' + email + '\npassword: ' + password);
    //connect to backend
    fetch('http://192.168.0.210:3000/getUsers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,

        //isLoggedIn: 'true',
      }),
    })
      .then(async (response) => await response.json())
      .then((json) => {
        if (json.message !== -1) {
          //console.warn('if Anweisunga girdi -1');
          this.setLoginData(json.message);
          //this.initLoginData();
          this.setLogStatus('true');
          //console.warn('Before NAvigation: ' + this.getUserName());
          //this.props.navigation.goBack();
          console.warn('Gehe zu OverviewPage');
          this.props.navigation.navigate('OverviewPage');
          //alert('Sie sind nun angemeldet');
        }
        if (json.message === -1) {
          //alert('Nutzer nicht vorhanden');
        }
      })
      .done();
  }

  async logout() {
    try {
      //await AsyncStorage.setItem('isLoggedIn', this.isLoggedIn.toString());

      if ((await AsyncStorage.getItem('isLogged')) === 'true') {
        this.setLoginData('');

        this.setLogStatus('false');

        alert('Sie sind nun abgemeldet');
      } else {
        alert('Sie sind bereits abgemeldet');
      }
      return true;
    } catch (exception) {
      return false;
    }
  }

  setLoginData = async (msg) => {
    await AsyncStorage.setItem('loginData', JSON.stringify(msg));
  };

  setLogStatus = async (isLoggedIn) => {
    await AsyncStorage.setItem('isLogged', isLoggedIn);
  };
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 15,
  },
  signupButton: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginForm;
