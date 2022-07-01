import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';

const Item = () => {
  const [name, setName] = useState('sss');

  useEffect(() => {
    // alert('start');
    // setName('world');
    // console.log('staer');
    // return () => {
    //   console.log('end');
    // };
    // setInterval(() => {
    //   console.log('hello');
    // }, 1000);
  }, []);

  return (
    <View>
      <Text>Item {name}</Text>
      <Button title={'click'} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
