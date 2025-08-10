import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
  secureTextEntry: boolean | undefined;
  onPressIcon: () => void;
  color: string;
}

const SecureIcon: FC<IProps> = ({ secureTextEntry, onPressIcon, color }) => {
  const secureIconName = secureTextEntry ? 'eye' : 'eye-off';

  return (
    <TouchableOpacity style={styles.button} onPress={onPressIcon}>
      <Ionicons name={secureIconName} size={20} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});

export default SecureIcon;
