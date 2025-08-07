import { FC } from 'react';
import { DimensionValue, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  placeholder?: string;
  value?: string;
  margin?: DimensionValue
}

const TextField: FC<Props> = ({
  placeholder,
  value,
  margin,
  ...props

}) => {

  const styles = StyleSheet.create({
    container: {
      margin: margin,
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'tomato',
      borderRadius: 4,
      paddingHorizontal: 10,
      paddingVertical: 15,
      fontSize: 16,
      color: '#000',
      backgroundColor: '#ffff',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value} {...props}
      />
    </View>
  );
};

export default TextField;
