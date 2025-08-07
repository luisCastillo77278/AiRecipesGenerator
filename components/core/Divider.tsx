import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  text: string,
}

const Divider: FC<IProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc', // Gris claro
  },
  text: {
    marginHorizontal: 20,
    color: '#ccc',
    fontWeight: '400',
    fontSize: 18
  },
});

export default Divider;
