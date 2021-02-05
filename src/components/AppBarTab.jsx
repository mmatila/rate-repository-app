import React from 'react'
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import Text from '../components/Text'
import theme from '../theme'

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
})

const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Text style={styles.tabHeading}>Repositories</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AppBarTab