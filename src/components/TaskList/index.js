import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function TaskList({ data }){
    return(
        <View style={styles.container}>

            <Text> TESTE </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    }
})