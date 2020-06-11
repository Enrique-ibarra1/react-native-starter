import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    //styling must be applied to all text input to be seen
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                
                value={password}
                onChangeText={(newText)=>{setPassword(newText)}}
                
            />
            {
                password.length < 4 ? <Text>Password mst be at least 4 characters</Text> : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 50,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
})
export default TextScreen;