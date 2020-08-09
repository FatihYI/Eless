import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

class logAPI extends Component {
  constructor() {
    super();
  }

  async login(email, password, props) {
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
          console.warn('if Anweisunga girdi -1');
          this.setLoginData(json.message);
          //this.initLoginData();
          this.setLogStatus('true');
          //console.warn('Before NAvigation: ' + this.getUserName());
          props.navigation.goBack();
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
        //await AsyncStorage.setItem('loginData', '');
        this.setLogStatus('false');
        // await AsyncStorage.setItem('isLoggedIn', 'false');

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

  /*initLoginData = async () => {
    //const {refresh} = this.state;

    try {
      const loginData = await AsyncStorage.getItem('loginData');
      console.warn('loginData: ' + loginData);
      //if (loginData !== null && refresh === false) {
      //this.setUserLoginData(loginData);
      this.setUserEmail(JSON.parse(loginData).email);
      this.setUserName(JSON.parse(loginData).username);
      this.setUserPassword(JSON.parse(loginData).password);
      this.setUserFirstname(JSON.parse(loginData).firstname);
      this.setUserLastname(JSON.parse(loginData).lastname);
      //this.setState({refresh: true});
      //}
    } catch (err) {
      console.warn(err);
    }
  };*/
}

const log = new logAPI();
export default log;
