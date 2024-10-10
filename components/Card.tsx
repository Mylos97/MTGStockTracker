import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type cardProps = {
  name: String
} 

export function Card( { name } : cardProps) {

  return (
    <ThemedText style={styles.text}>{ name }</ThemedText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 32,
    marginTop: -6,
  },
});
