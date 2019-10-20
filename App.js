import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather  from './components/Weather';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.weatherBox}>
        <Weather />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  weatherBox: {
    height: '15%',
    width: '100%',
  }
});
