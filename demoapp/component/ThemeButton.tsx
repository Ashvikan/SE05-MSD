
import React from 'react';
import { Button } from 'react-native';

type ThemeButtonProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, onToggleTheme }) => {
  return (
    <Button
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      onPress={onToggleTheme}
    />
  );
};
