import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, FunctionComponent } from 'react';
import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  text?: string;
  rounded?: number | string;
  active?: boolean;
  icon?: boolean;
  endIcon?: boolean;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  bgColor?: string;
  color?: string;
  paddingX?: DimensionValue;
  paddingY?: DimensionValue;
  width?: DimensionValue,
  height?: DimensionValue
}

const Button: FunctionComponent<Props> = ({
  text,
  icon,
  endIcon,
  iconName,
  rounded,
  bgColor,
  color,
  paddingX = 10,
  paddingY = 5,
  width = 'auto',
  height = 'auto',
  ...touchableProps
}) => {

  const styles = StyleSheet.create({
    content: {
      margin: 5,
      borderRadius: typeof rounded === 'string' ? `${rounded}` : rounded,
      flexDirection: !endIcon ? 'row' : 'row-reverse',
      justifyContent: icon && text ? 'space-between' : 'center',
      alignItems: 'center',
      paddingHorizontal: paddingX,
      paddingVertical: paddingY,
      backgroundColor: bgColor,
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      width: width,
      height: height,
    },
    text: {
      color: color,
      fontSize: 16,
      fontWeight: '500',
    },
  });

  return (
    <TouchableOpacity style={styles.content} {...touchableProps}>
      {
        icon ? <Ionicons name={iconName!} size={20} color={color} /> : null
      }
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default Button;
