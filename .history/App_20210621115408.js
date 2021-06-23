import 'react-native-gesture-handler';
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import InputChoose from './components/InputChoose';
 import React, {Component} from 'react';
 import { View } from 'react-native';
 
 import {styles} from './styles/styles'
 
 import { Calendar, LocaleConfig } from 'react-native-calendars'
 LocaleConfig.locales['fr'] = {
   monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
   monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
   dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
   dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
   today: 'Aujourd\'hui'
 }
 LocaleConfig.defaultLocale = "fr"
 const App = () => {

  const [text, onChangeText] = React.useState("");
  const [date, onChangeNumber] = React.useState(null);
 
   return (
     
     <>
     {/* <InputChoose /> */}
     <View style={styles.countainer}>
           <Calendar/>
     </View>
  
    </>
   )
 }
 
 export default App; 