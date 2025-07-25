import { FC, PropsWithChildren } from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';

type FontWeight = 'bold' | 'semibold' | 'normal'

const Fonts: Record<FontWeight, TextStyle['fontWeight']> = {
  bold: '700',
  semibold: '600',
  normal: '500',
};

interface Props extends PropsWithChildren {
  fontWeigth?: FontWeight,
  color?: string,
  style?: TextStyle,
}

const Text: FC<Props> = ({
  fontWeigth = 'normal',
  color,
  style,
  children,
}) => {

  const styles = StyleSheet.create({
    text: {
      fontWeight: Fonts[fontWeigth],
      color: color,
    },
  });

  return (
    <RNText style={[styles.text, style]}>{children}</RNText>
  );
};

export default Text;
