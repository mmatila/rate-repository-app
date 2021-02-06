import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const cardHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 10
    },
    avatarContainer: {
        padding: 15
    },
    infoContainer: {
        justifyContent: 'space-evenly'
    },
    name: {
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading
    },
    description: {
        flexWrap: 'wrap',
        paddingRight: 100
    }
})

const CardHeader = ({ item }) => {
    return (
        <View style={cardHeaderStyles.container}>
            <View style={cardHeaderStyles.avatarContainer}>
                <Image style={cardHeaderStyles.avatar} source={{
                    uri: item.ownerAvatarUrl
                }} />
            </View>
            <View style={cardHeaderStyles.infoContainer}>
                <Text style={cardHeaderStyles.name}>{item.fullName}</Text>
                <Text style={cardHeaderStyles.description}>{item.description}</Text>
            </View>
            <View>
            </View>
        </View>
    )
}

const cardInfoStyles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        paddingLeft: 80
    },
    language: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        padding: 5,
        borderRadius: 5 / 1.5
    }
})

const CardInfo = ({ item }) => {
    return (
        <View style={cardInfoStyles.container}>
            <Text style={cardInfoStyles.language} >{item.language}</Text>
        </View>
    )
}

const cardFooterStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    itemContainer: {
        padding: 15,
        alignItems: 'center'
    },
    itemHeader: {
        fontWeight: theme.fontWeights.bold
    }
})

const CardFooter = ({ item }) => {

    const checkCount = (number) => {
        return number <= 1000 ? number : (number / 1000).toFixed(1) + 'k'
    }

    return (
        <View style={cardFooterStyles.container}>
            <View style={cardFooterStyles.itemContainer}>
                <Text style={cardFooterStyles.itemHeader}>{checkCount(item.stargazersCount)}</Text>
                <Text>Stars</Text>
            </View>
            <View style={cardFooterStyles.itemContainer}>
                <Text style={cardFooterStyles.itemHeader}>{checkCount(item.forksCount)}</Text>
                <Text>Forks</Text>
            </View>
            <View style={cardFooterStyles.itemContainer}>
                <Text style={cardFooterStyles.itemHeader}>{item.reviewCount}</Text>
                <Text>Reviews</Text>
            </View>
            <View style={cardFooterStyles.itemContainer}>
                <Text style={cardFooterStyles.itemHeader}>{item.ratingAverage}</Text>
                <Text>Rating</Text>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10
    }
})

const Card = ({ item }) => {
    return (
        <View style={cardStyles.container}>
            <CardHeader item={item} />
            <CardInfo item={item} />
            <CardFooter item={item} />
        </View>
    )
}

export default Card