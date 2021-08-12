import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItems from '../CarItems'

import styles from './styles';
import cars from './cars'

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars} //This should be an array form of data
                renderItem={({item}) => <CarItems car={item} />}
                showsVerticalScrollIndicator={false} //this will hide the scrolling indicator
                snapToAlignment={'start'}
                decelartionRate={'fast'} //speed of animation the flat list will move up and down
                snapToInterval={Dimensions.get('window').height} //to specify how big is one item in the list. S it will be equal to height of the screen. So when we release it will try to center the element
            />
        </View>

    )
};

export default CarsList;