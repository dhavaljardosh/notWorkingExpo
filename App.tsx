import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import AppContainer from './navigation/AppNavigator'

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle
};


const App = (style:Object): {} => {
  const { container } = styles;
  return (
    <View style={container}>
      <AppContainer/>
    </View>
  );
}

export default  App;

