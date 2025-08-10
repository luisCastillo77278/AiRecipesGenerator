import { FC, useState } from 'react';
import { TextInputProps } from 'react-native';
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
  brColor,
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
      touched={touched}
      errors={errors}
      {...props}
    />
  );
};

export default PasswordTextField;
