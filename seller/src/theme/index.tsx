import React, { useState } from 'react';
import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';

import { OrionTheme } from './OrionTheme';
const themes: Array<Theme> = [OrionTheme];

type ContextParam = ((i: number) => void) | null;
const ThemeContext = React.createContext<ContextParam>(null);

export default ThemeContext.Consumer;

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const localStorageTheme = localStorage.getItem('appTheme');
    const initialTheme: number = localStorageTheme ? parseInt(localStorageTheme) : 0;

    const [themeIndex, setThemeIndex] = useState(initialTheme);

    const setTheme: ContextParam = (i) => {
        localStorage.setItem('appTheme', `${i}`);
        setThemeIndex(i);
    };

    return (
        <StylesProvider injectFirst>
            <ThemeContext.Provider value={setTheme}>
                <MuiThemeProvider theme={themes[themeIndex]}>{props.children}</MuiThemeProvider>
            </ThemeContext.Provider>
        </StylesProvider>
    );
};
