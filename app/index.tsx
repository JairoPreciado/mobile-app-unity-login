import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import NetInfo from '@react-native-community/netinfo';

const SplashScreen = () => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(true); // Estado para la conexión a Internet
  useEffect(() => {
    // Detectar cambios en la conexión a Internet
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected || false); // Asegúrate de manejar el caso undefined
    });

    // Verificar conexión al cargar la pantalla
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected || false); // Maneja posibles valores undefined
      if (!state.isConnected) {
        Alert.alert(
          'Sin conexión',
          'Por favor, verifica tu conexión a Internet para continuar.'
        );
      }
    });

    // Timer para avanzar al login solo si hay conexión
    const timer = setTimeout(() => {
      if (isConnected) {
        router.push('./login/login'); // Redirige al login
      }
    }, 3000); // 3 segundos

    return () => {
      clearTimeout(timer);
      unsubscribe(); // Limpia el listener de NetInfo
    };
  }, [router, isConnected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Instalaciones electricas</Text>
      {!isConnected && (
        <Text style={styles.errorText}>
          Sin conexión a Internet. Conéctate para continuar.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SplashScreen;
