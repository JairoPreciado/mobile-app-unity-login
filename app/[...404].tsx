// app/404.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NotFoundPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Página no encontrada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NotFoundPage;
