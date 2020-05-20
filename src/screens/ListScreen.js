import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'friend story 1 ', age: 24},
        {name: 'friend story 2 ', age: 26},
        {name: 'friend story 3 ', age: 21},
        {name: 'friend story 4 ', age: 28},
        {name: 'friend story 5 ', age: 28},
        {name: 'friend story 7 ', age: 25},
    ]
    return (
        <FlatList 
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => { 
                return (<Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>)
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;