import { Ionicons } from '@expo/vector-icons';
import { ComponentProps, FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import HelperErrorText from './HelperErrorText';
import Label from './Label';
import SecureIcon from './SecureIcon';

interface IProps extends TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  brColor?: string;
  touched?: boolean;
  errors?: string;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  isIcon?: boolean;
  onPressIcon?: () => void;
}

const TextField: FC<IProps> = ({
  label,
  name,
  placeholder,
  iconName,
  onPressIcon = null,
  touched = false,
  errors = '',
  isIcon = false,
  brColor = 'tomato',
  required = false,
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
      borderWidth: 1,
      borderColor: brColor,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      columnGap: 5,
    },
    button: {
      padding: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Label text={label} required={required} />
      <View style={styles.wrapperInput}>
        {isIcon ? (
          <Ionicons name={iconName!} size={20} color={brColor} />
        ) : null}
        <TextInput style={styles.input} placeholder={placeholder} {...props} />
        {onPressIcon ? (
          <SecureIcon
            secureTextEntry={props.secureTextEntry}
            onPressIcon={onPressIcon}
            color={brColor}
          />
        ) : null}
      </View>
      {touched && errors ? <HelperErrorText errorText={errors} /> : null}
    </View>
  );
};

export default TextField;
