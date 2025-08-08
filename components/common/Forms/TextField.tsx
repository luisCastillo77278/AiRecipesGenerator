import { useField } from "formik";
import { FC } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

interface IProps extends TextInputProps {
  label: string
  name: string,
  placeholder?: string
}

const TextField: FC<IProps> = (
  {
    label,
    name,
    placeholder,
    ...props
  }
) => {
  const [field, meta, helper] = useField(name);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        {...props}  
        onChangeText={helper.setValue}
        value={field.value}
        onBlur={() => helper.setTouched(true)}
        onFocus={() => helper.setTouched(false)}
      />
      {
        meta.touched && meta.error 
        ? <Text>{meta.error}</Text> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    rowGap: 8
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2
  },
  input: {
    borderWidth: 1,
    borderColor: 'tomato',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#ffff',
  }
})

export default TextField;