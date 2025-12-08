import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Welcome Home!
      </Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        You have successfully logged in.
      </Text>

      <Button
        mode="contained"
        onPress={handleLogout}
        style={styles.button}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#fff',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    color: 'rgba(255,255,255,0.8)',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    minWidth: 120,
  },
});