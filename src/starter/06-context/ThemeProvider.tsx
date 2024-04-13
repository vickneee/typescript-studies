import React, { useState } from 'react';
import ThemeProviderContext from './ThemeProviderContext';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
};

function ThemeProvider({
                                  children,
                                  defaultTheme = 'system',
                              }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    return (
        <ThemeProviderContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export default ThemeProvider;