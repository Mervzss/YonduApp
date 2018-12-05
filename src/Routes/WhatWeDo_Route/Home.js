import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppHome from '../../../AppHome'

const HomeSwitch = createSwitchNavigator({Home:AppHome}
)

export default AppContent = createAppContainer(HomeSwitch)

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },
//     instructions: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
//   });
  