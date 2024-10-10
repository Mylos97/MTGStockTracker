import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, Dimensions, Modal, Pressable } from 'react-native';
import Animated, { SlideInUp, SlideOutDown } from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const POPUP_HEIGHT = SCREEN_HEIGHT * 0.4;
const POPUP_WIDTH = SCREEN_WIDTH * 0.8;

type Props = PropsWithChildren<{
  visible: boolean;
  onClose: () => void;
  backgroundColor: { dark: string; light: string };
}>;

export function Popup({
  children,
  visible,
  onClose,
  backgroundColor,
}: Props): ReactElement | null {
  const colorScheme = useColorScheme() ?? 'light';
  const backgroundStyle = {
    backgroundColor: backgroundColor[colorScheme],
  };

  if (!visible) return null;

  return (
    <Modal transparent animationType="none" visible={visible}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Animated.View
          entering={SlideInUp}
          exiting={SlideOutDown}
          style={[styles.popup, backgroundStyle]}
        >
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: POPUP_WIDTH,
    height: POPUP_HEIGHT,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 24,
    gap: 16,
    flex: 1,
  },
});
