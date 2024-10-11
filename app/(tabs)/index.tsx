import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MyLineChart } from '@/components/LineChart';
import { ThemedCard } from '@/components/ThemedCard';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      >
      <ThemedView style={styles.mainContainer}> 
        <ThemedView>
          <ThemedText type="title">Overview</ThemedText>
        </ThemedView >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Total Value </ThemedText>
          <ThemedText type="title">180$</ThemedText>
          <ThemedView style={styles.dollarContainer}>
            <ThemedText type="subtitle" style={{color:'#1FAA59'}}>+10.25%</ThemedText>
            <ThemedText type="subtitle"> +10$ </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={{alignItems:'center'}}>
          <MyLineChart />
        </ThemedView>
        <ThemedView>
          <ThemedText type="subtitle">Your progress today</ThemedText>
        </ThemedView>
        <ThemedView style={styles.dollarContainer}>
          <ThemedCard>
            <ThemedText>Hello</ThemedText>
          </ThemedCard>
          <ThemedCard>
            <ThemedText>World</ThemedText>
          </ThemedCard>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  dollarContainer: {
    flexDirection:'row',
    gap:4
  },
  titleContainer: {
    flexDirection: 'column',
    gap:4
  },
  mainContainer : {
    flexDirection: 'column',
    gap:32
  }
});