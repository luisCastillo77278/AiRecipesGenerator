import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  text: string;
  required?: boolean;
}

const Label: FC<IProps> = ({ text, required = false }) => {
  return <Text style={styles.label}>{required ? `${text} *` : text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default Label;
