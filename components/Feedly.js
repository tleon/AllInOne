import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Feedly extends React.Component {
    render() {
        return (
            <View style={styles.mainStyle}>
                <Text>
                    Feedly
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'red',
        height: '100%',
    }
});

export default Feedly;