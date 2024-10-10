import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Card } from '@/components/Card';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/Button';
import { Popup } from '@/components/Popup';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';


export default function HomeScreen() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupOpen = () => setPopupVisible(true);
  const handlePopupClose = () => setPopupVisible(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cards</ThemedText>
        <Button label='Add Card' onPress={handlePopupOpen} />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Latest Added Cards</ThemedText>
      </ThemedView>
      
      <Popup
        visible={isPopupVisible}
        onClose={handlePopupClose}
        backgroundColor={{ light: '#ffffff', dark: '#333333' }}>
        <ThemedText type="subtitle">New card</ThemedText>
        <Button label="Close" onPress={handlePopupClose} />
      </Popup>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
