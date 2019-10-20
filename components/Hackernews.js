import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Hackernews extends React.Component {
    render() {
        return (
            <View style={styles.maineStyle}>
                <Text>
                    HackerNews
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    maineStyle: {
        backgroundColor: 'blue',
        height: '100%',
    }
});

export default Hackernews;