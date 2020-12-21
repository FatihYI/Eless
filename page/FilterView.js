import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Switch, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const FilterView = (props) => {
  const [isHelal, setIsHelal] = useState(false);
  const [isVegetable, setIsVegetable] = useState(false);

  const retrieveFilterData = () => {
    if (props.route) {
      if (props.route.params) {
        if (props.route.params.refreshNew) {
          if (props.route.params.helal === 'true') {
            setIsHelal(true);
          } else {
            setIsHelal(false);
          }
          if (props.route.params.vegetable === 'true') {
            setIsVegetable(true);
          } else {
            setIsVegetable(false);
          }

          props.route.params.refreshNew = false;
        }
      }
    }
  };

  const toggleSwitchHelal = () => {
    setIsHelal((previousState) => !previousState);
    AsyncStorage.setItem('helal', JSON.stringify(!isHelal));
  };

  const toggleSwitchVegetable = () => {
    setIsVegetable((previousState) => !previousState);
    AsyncStorage.setItem('vegetable', JSON.stringify(!isVegetable));
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const storeFilter = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {}
  };

  const backAction = () => {
    props.navigation.navigate('OverviewPage', {
      refreshNew: true,
      filterValues: {},
    });

    return true;
  };

  return (
    <View>
      {retrieveFilterData()}
      <View style={styles.filterViewRow}>
        <Text>Helal</Text>
        <Text>{isHelal.toString()}</Text>
        <Switch
          trackColor={{false: '#767577', true: 'lightblue'}}
          thumbColor={isHelal ? 'green' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchHelal}
          value={isHelal}
        />
      </View>
      <View style={styles.filterViewRow}>
        <Text>Vegetarisch</Text>
        <Text>{isVegetable.toString()}</Text>

        <Switch
          trackColor={{false: '#767577', true: 'lightblue'}}
          thumbColor={isVegetable ? 'green' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchVegetable}
          value={isVegetable}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterViewRow: {
    borderBottomWidth: 2,
    borderColor: 'grey',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    //flex: 1,
    flexDirection: 'row',
  },
});

export default FilterView;
