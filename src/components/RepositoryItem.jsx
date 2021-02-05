import React from 'react'
import { View } from 'react-native'
import Text from '../components/Text'

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <Text color='primary'>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem
