import React from "react";
import {StyleSheet,View,Text,Image,Dimensions} from "react-native";

const screenWidth = Dimensions.get('screen').width;

export const LandingScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Image source={require('../images/map-icon.png')}></Image>
                <Text>Main body</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    navigation:{
        flex:1,
        alignItems:'center',
    },
    body:{
        flex:10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    footer:{
        flex:1,
        alignItems: 'center',
    }
})