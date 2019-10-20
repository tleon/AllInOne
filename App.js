import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather  from './components/Weather';
import Reddit from "./components/Reddit";
import Hackernews from "./components/Hackernews";
import Feedly from "./components/Feedly";
import Podcasts from "./components/Podcasts";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.weatherBox}>
        <Weather />
      </View>
      <View style={styles.redditBox}>
        <Reddit />
      </View>
      <View style={styles.feedlyBox}>
        <Feedly />
      </View>
      <View style={styles.hackernewsBox}>
        <Hackernews />
      </View>
      <View style={styles.podcastBox}>
        <Podcasts />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  weatherBox: {
    height: '20%',
    width: '100%',
  },
  redditBox: {
    width: '50%',
    height: '40%',
  },
  feedlyBox: {
    width: '50%',
    height: '40%',
  },
  hackernewsBox: {
    width: '50%',
    height: '40%',
  },
  podcastBox: {
    width: '50%',
    height: '40%',
  }
});
