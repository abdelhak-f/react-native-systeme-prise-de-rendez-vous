import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import {styles} from '../styles/styles'

export default function InputChoose() {

  // constructor(){
  //   super();
  //   this.state = {
  //   dataku: [],
  // };
  // }
  addrdv(){
    var url = 'http://172.16.8.181:3210/postrdv';
    axios.post(url, {
      num_rdv: this.state.input1,
      heure_rdv: this.state.input2,
      date_rdv: this.state.input3
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.state.input1 = '';
    this.state.input2 = '';
    this.state.input3 = '';
  };

    const [text, onChangeText] = React.useState("");
    const [date, onChangeNumber] = React.useState(null);

  return (
    <View>
         <View >
      
           <Text style={styles.title}>Add in appointement</Text>
         </View>
         <View style={styles.input}>
          
         <TextInput
              style={styles.childinput}
              onChangeText={(input1) => this.setState({input1})}
              value={this.state.input1}
              placeholder="num_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={(input1) => this.setState({input2})}
              value={this.state.input2}
              placeholder="heur_rdv"
              keyboardType="numeric"
            />
             <TextInput
              style={styles.childinput}
              onChangeText={(input1) => this.setState({input3})}
              value={this.state.input3}
              placeholder="date_rdv"
              keyboardType="numeric"
            />
            <Button title='submit'
              color="grey"
              onPress={this.addrdv.bind(this)}
              />

           </View>
     </View>
  );
}
