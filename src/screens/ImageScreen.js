import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail imageTitle="Forest" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail imageTitle="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
            <ImageDetail imageTitle="Beach" imageSource={require('../../assets/beach.jpg')}/>
        </View>
    );
};

export default ImageScreen;