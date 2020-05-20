import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"/>
          <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
          <Button title="Go to Images Demo" onPress={() => navigation.navigate('Images')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'blue',
    marginHorizontal: 50
  }
});

export default HomeScreen;
