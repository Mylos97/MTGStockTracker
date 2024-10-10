import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';

type iconProps = {
  name: keyof typeof Ionicons.glyphMap, 
  size: number
} 

export function Icon( { name, size } : iconProps) {

  return (
    <ThemedView style={style.container}>
        <Ionicons name={name} size={size}/>
    </ThemedView>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'transparent'
    },
});  