import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Reddit extends React.Component {
    render() {
        return (
            <View style={styles.mainStyle}>
                <Text>
                    Reddit
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'purple',
        height: '100%',
    }
});

export default Reddit;