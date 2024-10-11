import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedCard({ style, lightColor, darkColor, ...otherProps }: ThemedCardProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'cardColor');

  return <View style={[{ borderWidth:1, borderRadius:2, borderColor:'grey', flex:1, alignItems:'center', justifyContent:'center'}, style]} {...otherProps} />;
}