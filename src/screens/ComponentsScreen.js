import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.subTitle}>Hello</Text>;
    return (
        <View>
            <Text style={styles.textStyle}>get cash</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'green',
    },
    subTitle: {
        fontSize: 20,
        color: 'blue'
    }
});

export default ComponentsScreen;