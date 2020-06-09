import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button } from 'react-native';

const INCREMENT = 1;
//action is how to change state.
const reducer = (state, action) => {
    //state === {count: number} 
    //action == {type: 'increase' || 'deacrease', payload: }
    switch(action.type) {
        case 'increase' : 
        //you cannot change state directly, return a new object with the old state rewritten for the function to do its thing. just do it.
            return {...state, count: state.count + action.payload};
        case 'decrease' : 
            return {...state, count: state.count + action.payload};
        default:
            return state;
    }
}
const CounterScreen = () => {
    //The second requirement for useReducer must/should be an object
    const [state, dispatch] = useReducer( reducer, {
        count: 0
    });
    const {count} = state;
    return(
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'increase', payload: INCREMENT})}
            />
            <Button title="Decrease" onPress={() => dispatch(   {type: 'decrease', payload: -1 * INCREMENT })}
            />
            <Text>Current Count: {count} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;