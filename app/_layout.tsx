import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import theme from './theme';

function AppBarLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          paddingTop: Math.max(insets.top - 40, 0),
          backgroundColor: 'transparent',
        }}
      >
        <Appbar.Header
          style={{
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          }}
          elevated={false}
        >
          <Appbar.Content
            title="InventoryPro"
            titleStyle={{ color: '#ffffff' }}
          />
        </Appbar.Header>
      </View>
      <Stack screenOptions={{ headerShown: false, contentStyle: { flex: 1, backgroundColor: 'transparent' } }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme as any}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <LinearGradient
          colors={['#7399C6', '#DBDBDB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <AppBarLayout />
        </LinearGradient>
      </PaperProvider>
    </SafeAreaProvider>
  );
}