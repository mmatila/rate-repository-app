import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme'
import AppBarTab from '../components/AppBarTab'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.secondary,
        height: 100
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab />
        </View>
    );
};

export default AppBar;