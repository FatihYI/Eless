import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import OverviewPage from '../page/OverviewPage';


/*

+++++++++++++++++++++++++++++++++++++++++
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
DIESE KLASSE WIRD NICHT MEHR VERWENDET, STATTDESSEN LOGINFORM!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
+++++++++++++++++++++++++++++++++++++++++
 */

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
          //this.props.navigation.goBack();
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

const log = new logAPI();
export default log;
