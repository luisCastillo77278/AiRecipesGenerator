import useTheme from '@theme/useTheme';
import { FC } from 'react';
import { Text } from 'react-native';

interface IProps {
  errorText: string;
}

const HelperErrorText: FC<IProps> = ({ errorText }) => {
  const { paletteColors } = useTheme();
  return <Text style={{ color: paletteColors.error }}>{errorText}</Text>;
};

export default HelperErrorText;
