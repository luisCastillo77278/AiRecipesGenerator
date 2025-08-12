import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, FC, ReactNode } from 'react';
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import HelperErrorText from './HelperErrorText';
import Label from './Label';

interface IProps extends TextInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  brColor?: string;
  touched?: boolean;
  errors?: string;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  isIcon?: boolean;
  onPressIcon?: () => void;
  brWidth?: number;
  bgColor?: string;
  elevation?: number;
  brRadius?: number;
  padding?: DimensionValue;
  paddingX?: DimensionValue;
  paddingY?: DimensionValue;
  iconAction?: () => ReactNode;
}

const TextField: FC<IProps> = ({
  name,
  placeholder,
  iconName,
  elevation = 0,
  label = '',
  iconAction = null,
  touched = false,
  errors = '',
  isIcon = false,
  required = false,
  bgColor = '#ffff',
  brColor = 'tomato',
  brWidth = 1,
  brRadius = 10,
  padding = 0,
  paddingX = 10,
  paddingY = 5,
  ...props
}) => {
  const styles = StyleSheet.create({
    container: {
      rowGap: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 0.2,
    },
    input: {
      fontSize: 16,
      color: '#000',
      flex: 1,
    },
    wrapperInput: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: brWidth,
      borderColor: brColor,
      borderRadius: brRadius,
      paddingHorizontal: paddingX,
      paddingVertical: paddingY,
      columnGap: 5,
      backgroundColor: bgColor,
      elevation: elevation,
    },
    button: {
      padding: 8,
    },
  });

  return (
    <View style={styles.container}>
      {label ? <Label text={label} required={required} /> : null}
      <View style={styles.wrapperInput}>
        {isIcon ? (
          <Ionicons name={iconName!} size={20} color={brColor} />
        ) : null}
        <TextInput style={styles.input} placeholder={placeholder} {...props} />
        {iconAction ? iconAction() : null}
      </View>
      {touched && errors ? <HelperErrorText errorText={errors} /> : null}
    </View>
  );
};

export default TextField;
