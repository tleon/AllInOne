import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Podcasts extends React.Component {
    render() {
        return (
            <View style={styles.mainStyle}>
                <Text>
                    Podcasts
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'green',
        height: '100%',
    }
});

export default Podcasts;