import React, { useEffect, useState } from 'react';
import themedStyles from './Styles' 
import { ActivityIndicator, Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios'

const LocalApi = () => {
  const styles = themedStyles;
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bidang, setBidang] = useState("")
  const [users, setUsers] = useState([])

  useEffect (() => {
    getData();
  }, []);

  const submit = () => {
      const data = {
          name,
          email,
          bidang
      }
      console.log('data before send: ', data)
      Axios.post('http://10.0.2.2:3004/users', data)
        .then( res => {
            console.log('res: ', res);
            setName("");
            setEmail("");
            setBidang("");
            getData();
        })

  }

  const getData = () => {
      Axios.get('http://10.0.2.2:3004/users')
        .then(res => {
            console.log('res', res);
            setUsers(res.data);
        })
  }

//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   cont movieURL= 'https://reactnative.dev/movies.json';

//   useEffect(() => {
//     fetch(movieURL)
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
 

  const Item = ({name, email, bidang}) => {
    return(
        
            <View style={styles.itemContainer}>
            <Image source={{uri:`https://i.pravatar.cc/150?u=${email}`}} style={styles.avatar}/>
            <View style={styles.desc}>
                <Text>{name}</Text>
                <Text>{email}</Text>
                <Text>{bidang}</Text>
            </View>
            </View>
        
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}> Belajar Integrasi CRUD </Text>
      <TextInput placeholder='nama lengkap' style={styles.txtInput} value={name} onChangeText={(value) => setName(value)}/>
      <TextInput placeholder='email'style={styles.txtInput} value={email} onChangeText={(value) => setEmail(value)}/>
      <TextInput placeholder='bidang'style={styles.txtInput} value={bidang} onChangeText={(value) => setBidang(value)}/>
      <Button title='simpan' onPress={submit}/>          
      <View style={styles.line}/>
    <ScrollView> 
      {users.map(user => {
        return <Item name={user.name} email={user.email} bidang={user.bidang}/>
     })}
    </ScrollView>
    </View>
  );
};

export default LocalApi;



