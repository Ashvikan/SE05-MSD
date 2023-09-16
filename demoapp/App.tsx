// App.tsx

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeButton } from './component/ThemeButton';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentThemeStyles = theme === 'light' ? lightTheme : darkTheme;




  return (
    <View style={currentThemeStyles.container}>
      <ThemeButton theme={theme} onToggleTheme={toggleTheme} />
      <StatusBar style="auto" />
    </View>
  );
}

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
