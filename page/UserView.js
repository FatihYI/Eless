import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import log from '../API/logAPI';
class UserView extends Component {
  constructor() {
    super();
    /*this.isLoggedIn = 'false';
    this.username = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';

    this.state = {refresh: false};*/

    this.loginData;

    this.state = {
      refresh: false,
    };
    this.setData();
    //alert(log.username);
  }

  //Heißt in logApi initLoginData
  /*getUserData = async () => {
    const {refresh} = this.state;

    try {
      const userdata = await AsyncStorage.getItem('loginData');
      const logInfo = await AsyncStorage.getItem('isLoggedIn');
      if (userdata !== null && logInfo !== null && refresh === false) {
        this.loginData = userdata;
        this.isLoggedIn = logInfo;
        this.email = JSON.parse(userdata).email;
        this.username = JSON.parse(userdata).username;
        this.password = JSON.parse(userdata).password;
        this.firstname = JSON.parse(userdata).firstname;
        this.lastname = JSON.parse(userdata).lastname;
        this.setState({refresh: true});
      }
    } catch (err) {
      console.warn(err);
    }
  };*/

  //get user data von hier genommen

  setData = async () => {
    const {refresh} = this.state;
    this.loginData = await AsyncStorage.getItem('loginData');
    this.setState({
      refresh: !refresh,
    });
    console.log('loginData:' + this.loginData);
  };

  render() {
    //this.getUserData();
    //log.initLoginData();
    console.log('render:' + this.loginData);
    let {email, name, password, firstname, lastname, username} = '';
    if (this.loginData) {
      email = JSON.parse(this.loginData).email;
      username = JSON.parse(this.loginData).username;
      password = JSON.parse(this.loginData).password;
      firstname = JSON.parse(this.loginData).firstname;
      lastname = JSON.parse(this.loginData).lastname;

      console.warn('girdi');
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.regform}>
            <Text style={styles.header}>Übersicht</Text>

            <Text style={styles.subHeader}>Username:</Text>
            <Text style={styles.textinput}>{username}</Text>
            <Text style={styles.subHeader}>Firstname:</Text>
            <Text style={styles.textinput}>{firstname}</Text>
            <Text style={styles.subHeader}>Lastname:</Text>
            <Text style={styles.textinput}>{lastname}</Text>
            <Text style={styles.subHeader}>Email:</Text>
            <Text style={styles.textinput}>{email}</Text>
            <Text style={styles.subHeader}>Password:</Text>
            <Text style={styles.textinput}>{password}</Text>
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

export default UserView;
