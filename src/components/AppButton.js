import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';

const AppButton = props => {
  console.log('App btn props', props);
  const {title} = props;
  return (
    <View>
      <Button title={title} />
    </View>
  );
};
export default AppButton;

const styles = StyleSheet.create({});
