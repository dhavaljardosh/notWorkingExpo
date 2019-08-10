import {createAppContainer, createStackNavigator} from 'react-navigation';
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF0',
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    }
});

const HomeScreen = () => (
    <View style={styles.container}>
        <View>
            <Text>PLEASE PLEASE PLEASE RENDER THIS</Text>
        </View>
    </View>
);

HomeScreen.navigationOptions = {
    title: 'Home'
};


/**
|--------------------------------------------------
| @What_I_want_here_is 

| To have different combinations of StackNavigator, 
| TabNavigator and other different types of Navigator
|--------------------------------------------------
*/

const AppNavigator = createStackNavigator({Home: HomeScreen});

export default createAppContainer(AppNavigator);