import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarTab from '../components/AppBarTab'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.secondary,
        height: 100
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title={'Repositories'} destination={'/'} />
            <AppBarTab title={'Sign in'} destination={'/signin'}/>
        </View>
    );
};

export default AppBar;