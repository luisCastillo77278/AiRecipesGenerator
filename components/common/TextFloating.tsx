import { FC, useEffect, useRef, useState } from 'react';
import { Animated, DimensionValue, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  label: string;
  value?: string;
  margin?: DimensionValue
}

const TextFloating: FC<Props> = ({
  label,
  value,
  margin,
  ...props
}) => {
  const fadeAnimate = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log({ isFocused });
    Animated.timing(fadeAnimate, {
      toValue: isFocused ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [fadeAnimate, isFocused, value]);

  const stylingLabel = {
    position: 'absolute' as const,
    left: 5,
    top: fadeAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -9],
    }),
    fontSize: fadeAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: fadeAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#6200ee'],
    }),

  };

  const styles = StyleSheet.create({
    container: {
      margin: margin,
    },
    label: {
      fontSize: 14,
      color: '#6200ee',
      marginBottom: 4,
      zIndex: 2,
      paddingHorizontal: 10,
      backgroundColor: '#ffff',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#6200ee',
      borderRadius: 4,
      padding: 10,
      fontSize: 16,
      color: '#000',
      backgroundColor: '#ffff',
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.label, stylingLabel]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        style={styles.textInput}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};



export default TextFloating;
