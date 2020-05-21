import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Regform extends React.Component{
    render(){
        return(

            <View style={styles.container}>
                <View style={styles.regform}>
                    <Text style={styles.header}>Registration</Text>

                    <TextInput style={styles.textinput} placeholder={"Your Name"}
                               underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textinput} placeholder={"Your Email"}
                               underlineColorAndroid={'transparent'}/>

                    <TextInput style={styles.textinput} placeholder={"Your Password"}
                               secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                               <TouchableOpacity style={styles.button}>
                                   <Text style={styles.btntext}>Sign up</Text>
                               </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 60,
        paddingRight: 60,
    },

    regform:{
        alignSelf: 'stretch',
    },
    header:{
        fontSize: 34,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },
    textinput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#E9E8E8',
        borderBottomWidth: 1,
    },

    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
    }
});
