import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppHome from './AppHome'
// import AppContent from './src/Routes/WhatWeDo_Route/Home'

export default class App extends Component{
  render() {

    return <AppContent/>
  }
}


// let res = array2.map((val, i) =>{
//   let resMe = {[val]: array[i]}
//   return resMe
// })


const array = [AppHome]
const array2 = ['Home']
    // const test = {[array2[0]]:array[0]}
    
   const generate = () => {
    let mytest = null
    let i = 0
     do{
      mytest={
        ...mytest,
        [array2[i]]:array[i]
      }
      i ++
    }while(i < array.length)
    console.log(mytest)
    return mytest
  }

// console.log(res)
const HomeSwitch = createSwitchNavigator(generate()
)

const AppContent = createAppContainer(HomeSwitch)