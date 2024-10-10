import { PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type Props = PropsWithChildren<{
  label: string;
  onPress: () => void;
}>;

export function Button({ label, onPress, children }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ThemedView style={styles.content}>
        {label ? <ThemedText style={styles.text}>{label}</ThemedText> : null}      
        {children && <ThemedView>{children}</ThemedView>}
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // Ensures the icon and text are side by side
    alignItems: 'center', // Center items vertically
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 32,
    color: 'black',
  },
});
