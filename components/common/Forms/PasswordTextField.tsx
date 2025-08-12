import { FC, useState } from 'react';
import { TextInputProps } from 'react-native';
import SecureIcon from './SecureIcon';
import TextField from './TextField';

interface IProps extends TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  brColor?: string;
  touched?: boolean;
  errors?: string;
}

const PasswordTextField: FC<IProps> = ({
  label,
  name,
  placeholder,
  brColor = '#000',
  required = false,
  touched = false,
  errors = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      name={name}
      secureTextEntry={!showPassword}
      brColor={brColor}
      required={required}
      isIcon
      iconName="key"
      onPressIcon={togglePasswordVisibility}
      iconAction={() => (
        <SecureIcon
          secureTextEntry={showPassword}
          onPressIcon={togglePasswordVisibility}
          color={brColor}
        />
      )}
      touched={touched}
      errors={errors}
      {...props}
    />
  );
};

export default PasswordTextField;
