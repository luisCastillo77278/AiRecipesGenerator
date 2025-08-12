import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, FC } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
  text: string;
  iconName: ComponentProps<typeof Ionicons>['name'];
  color: string;
}

const ButtonTab: FC<IProps> = ({ text, iconName, color, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Ionicons name={iconName} size={24} color={color} />
      <Text style={{ color }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default ButtonTab;
