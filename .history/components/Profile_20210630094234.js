import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import axios from 'axios';
import {styles} from '../styles/styles';

export default function InputChoose() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [formKey, setFormkey] = useState(10);

  function addrdv() {
    var url = 'http://172.16.8.181:8080/postrdv';
    axios
      .post(url, {
        num_rdv: input1,
        heure_rdv: input2,
        date_rdv: input3,
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setInput1('');
        setInput2('');
        setInput3('');
      });
    setFormkey(formKey + 1);
  }
  //  function Getrdv(){
  //     var url = '';
  //     axios.get(url)
  //     .then((ambilData) => {
  //       console.log(ambilData.data);
  //       this.setState({
  //         dataku: ambilData.data,
  //       })
  //     })
  //   };
  const [ticketList, setTicketList] = useState([]);
  useEffect(() => {
    axios.get('http://172.16.8.181:8080/getrdv').then(response => {
      setTicketList(response.data);
    });
  }, []);

  return (
    <View>
      <View>
        <Text style={styles.title}>Add in appointement</Text>
      </View>
      <View style={styles.input} key={formKey}>
        <TextInput
          style={styles.childinput}
          onChangeText={val => setInput1(val)}
          placeholder="num_rdv"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.childinput}
          onChangeText={val => setInput2(val)}
          placeholder="heur_rdv"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.childinput}
          onChangeText={val => setInput3(val)}
          placeholder="date_rdv"
          keyboardType="numeric"
        />
        <Button
          title="submit"
          color="grey"
          onPress={() => {
            addrdv();
          }}
        />
      </View>
      <View></View>
    </View>
  );
}
