import { createContext } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
    undefined
);

export default ThemeProviderContext;