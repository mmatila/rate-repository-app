import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../components/Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        
    },
    tabHeading: {
        color: 'white',
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        paddingBottom: 15,
        paddingLeft: 10
    }
});

const AppBarTab = ({ title, destination }) => {
    return (
        <View style={styles.container}>
            <Link to={destination} component={TouchableOpacity} activeOpacity={0.8}>
                <Text style={styles.tabHeading}>{title}</Text>
            </Link>
        </View>
    );
};

export default AppBarTab;